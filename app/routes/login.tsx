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
    <div className="grid h-full w-full grid-cols-2 gap-2 dark:bg-black">
      <div className="flex">
        <div className="my-auto mx-auto flex flex-col text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-50">
            Sign in to your account
          </h1>

          <Form
            action="/login"
            method="post"
            className="flex w-[480px] flex-col self-center py-4"
          >
            <div className="flex flex-col pb-4">
              <label
                htmlFor="email"
                className="sr-only pb-2 text-lg text-gray-800 dark:text-gray-50"
              >
                Email
              </label>

              <input
                name="username"
                required
                id="email"
                type="email"
                placeholder="Email"
                className="block border-b-2 bg-white px-4 py-2 text-xl focus:border-b-slate-200 focus:outline-none dark:border-b-slate-50 dark:bg-black dark:text-gray-50"
              />
            </div>

            <div className="mb-4 flex flex-col pb-6">
              <label
                htmlFor="password"
                className="sr-only pb-2 text-lg text-gray-800 dark:text-gray-50"
              >
                Password
              </label>

              <input
                name="password"
                required
                type="password"
                id="password"
                placeholder="Password"
                className="block border-b-2 bg-white px-4 py-2 text-xl focus:border-b-slate-200 focus:outline-none dark:border-b-slate-50 dark:bg-black dark:text-gray-50"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md border-2 px-4 py-2 text-xl focus:border-pink-200 focus:ring focus:ring-pink-100 dark:bg-gray-50 dark:text-gray-900"
            >
              Continue
            </button>

            <span className="py-4 text-gray-900 dark:text-gray-50">Or</span>

            <button
              type="submit"
              className="mb-4 w-full rounded-md border-2 px-4 py-2 text-xl focus:border-pink-200 focus:ring focus:ring-pink-100 dark:bg-gray-50 dark:text-gray-900"
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
          className="aspect-[16 / 9] w-full overflow-hidden"
        >
          <source src={welcomeVideo} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    </div>
  );
}
