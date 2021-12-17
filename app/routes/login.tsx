import { ActionFunction, Form, LoaderFunction, MetaFunction } from "remix";
import { authenticator } from "~/auth.server";

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
    <div className="self-center rounded p-4 border-2 border-gray-200 mt-[5%]">
      <h1 className="text-2xl font-extrabold">Sign into your Account</h1>

      <Form
        action="/login"
        method="post"
        className="py-4 self-center w-[480px]"
      >
        <div className="flex flex-col pb-4">
          <label htmlFor="email" className="text-gray-800 text-lg pb-2">
            Email
          </label>

          <input
            name="username"
            required
            id="email"
            type="email"
            className="font-sans rounded-md block text leading-5 w-full py-3 px-3 border-2 border-sky-600 text-gray-500 shadow-sm focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-500"
          />
        </div>

        <div className="flex flex-col pb-6">
          <label htmlFor="password" className="text-gray-800 text-lg pb-2">
            Password
          </label>

          <input
            name="password"
            required
            type="password"
            id="password"
            className="font-sans rounded-md block text leading-5 w-full py-3 px-3 border-2 border-sky-600 text-gray-500 shadow-sm focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-500"
          />
        </div>

        <button
          type="submit"
          className="w-full text-white border-2 rounded-md bg-sky-500 px-3 py-2 text-xl border-sky-500 focus:ring focus:ring-sky-200 focus:border-sky-500"
        >
          Continue
        </button>
      </Form>
    </div>
  );
}
