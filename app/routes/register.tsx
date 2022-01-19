import bcrypt from "bcryptjs";
import { ActionFunction, Form, LoaderFunction, MetaFunction } from "remix";
import { authenticator } from "~/auth.server";
import UserRepository from "../../domain/helpbelize/repositories/user";

export const meta: MetaFunction = () => {
  return {
    title: "Register",
    description:
      "Register to find Belizeans in need or to request help from other Belizeans.",
  };
};

export let action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  if (!formData.get("email") || !formData.get("password")) {
    throw new Error("Email and password are both required.");
  }

  await UserRepository.createUser(
    formData.get("email") as string,
    await bcrypt.hash(formData.get("password") as string, 8)
  );

  await authenticator.authenticate("local", request, {
    successRedirect: "/",
    failureRedirect: "/register",
  });
};

export let loader: LoaderFunction = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    successRedirect: "/",
  });

  return null;
};

export default function Login() {
  return (
    <div className="flex flex-col my-auto mx-auto text-center">
      <h1 className="text-gray-900 dark:text-gray-50 text-4xl font-bold mb-4">
        Create your account
      </h1>

      <Form
        method="post"
        action="/register"
        className="py-4 self-center w-[480px]"
        autoComplete="off"
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
          Register
        </button>
      </Form>
    </div>
  );
}
