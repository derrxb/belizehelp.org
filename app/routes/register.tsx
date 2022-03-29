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
    <div className="my-auto mx-auto flex flex-col text-center">
      <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-50">
        Create your account
      </h1>

      <Form
        method="post"
        action="/register"
        className="w-[480px] self-center py-4"
        autoComplete="off"
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
          Register
        </button>
      </Form>
    </div>
  );
}
