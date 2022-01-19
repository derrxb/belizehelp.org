import { ActionFunction, Form, LoaderFunction, MetaFunction } from "remix";
import { authenticator } from "~/auth.server";
import welcomeVideo from "../../public/videos/welcome.mp4";

export const meta: MetaFunction = () => {
  return {
    title: "Sign in to your Account",
    description:
      "Sign in to your account to see existing request for donations or to donate to Belizeans in need.",
  };
};

export let action: ActionFunction = async ({ request }) => {
  // Authenticate the request, after that it will redirect to the defined URLs
  // and set the user in the session if it's a success
  await authenticator.authenticate("local", request, {
    successRedirect: "/",
    failureRedirect: "/login",
  });
};

export let loader: LoaderFunction = async ({ request }) => {
  // If the user is already authenticated redirect to /dashboard directly
  const user = await authenticator.isAuthenticated(request, {
    successRedirect: "/",
  });

  return null;
};

export default function Login() {
  return (
    <div className="w-full h-full dark:bg-black grid grid-cols-2 gap-2">
      <div className="flex">
        <div className="flex flex-col my-auto mx-auto text-center">
          <h1 className="text-gray-900 dark:text-gray-50 text-4xl font-bold mb-4">
            Sign in to your account
          </h1>

          <Form
            action="/login"
            method="post"
            className="flex flex-col py-4 self-center w-[480px]"
          >
            <div className="flex flex-col pb-4">
              <label
                htmlFor="email"
                className="text-gray-800 dark:text-gray-50 text-lg pb-2 sr-only"
              >
                Email
              </label>

              <input
                name="username"
                required
                id="email"
                type="email"
                placeholder="Email"
                className="block px-4 py-2 border-b-2 text-xl focus:outline-none focus:border-b-slate-200 bg-white dark:bg-black dark:border-b-slate-50 dark:text-gray-50"
              />
            </div>

            <div className="flex flex-col pb-6 mb-4">
              <label
                htmlFor="password"
                className="text-gray-800 dark:text-gray-50 text-lg pb-2 sr-only"
              >
                Password
              </label>

              <input
                name="password"
                required
                type="password"
                id="password"
                placeholder="Password"
                className="block px-4 py-2 border-b-2 text-xl focus:outline-none focus:border-b-slate-200 bg-white dark:bg-black dark:border-b-slate-50 dark:text-gray-50"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 text-xl dark:bg-gray-50 dark:text-gray-900 border-2 rounded-md focus:ring focus:ring-pink-100 focus:border-pink-200"
            >
              Continue
            </button>

            <span className="text-gray-900 dark:text-gray-50 py-4">Or</span>

            <button
              type="submit"
              className="w-full px-4 py-2 text-xl dark:bg-gray-50 dark:text-gray-900 border-2 rounded-md focus:ring focus:ring-pink-100 focus:border-pink-200 mb-4"
            >
              Sign in with Facebook
            </button>
          </Form>
        </div>
      </div>

      <div className="overflow-hidden">
        <video
          autoPlay
          crossOrigin="anonymous"
          playsInline
          preload="auto"
          className="w-full overflow-hidden aspect-[16 / 9]"
        >
          <source src={welcomeVideo} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    </div>
  );
}
