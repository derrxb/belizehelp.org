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
    <div className="self-center rounded p-4 mt-[5%]">
      <h1 className="text-3xl font-extrabold text-gray-800">
        Create your Account
      </h1>

      <Form
        method="post"
        action="/register"
        className="py-4 self-center w-[480px]"
        autoComplete="off"
      >
        <div className="flex flex-col pb-4">
          <label htmlFor="email" className="text-gray-800 text-lg pb-2">
            Email
          </label>

          <input
            name="email"
            required
            autoComplete="off"
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
            autoComplete="off"
            type="password"
            id="password"
            className="font-sans rounded-md block text leading-5 w-full py-3 px-3 border-2 border-sky-600 text-gray-500 shadow-sm focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-500"
          />
        </div>

        <button
          type="submit"
          className="w-full text-white border-2 rounded-md bg-sky-500 px-3 py-2 text-xl border-sky-500 focus:ring focus:ring-sky-200 focus:border-sky-500"
        >
          Register Account
        </button>
      </Form>
    </div>
  );
}
