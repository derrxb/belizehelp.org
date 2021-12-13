import { Form, MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return {
    title: "Sign in to your Account",
    description:
      "Sign in to your account to see existing request for donations or to donate to Belizeans in need.",
  };
};

export default function Login() {
  return (
    <div className="self-center rounded p-4 border-2 border-gray-200 mt-[5%]">
      <h1 className="text-2xl font-extrabold">Sign into your Account</h1>

      <Form className="py-4 self-center w-[480px]">
        <div className="flex flex-col pb-4">
          <label htmlFor="email" className="text-gray-800 text-lg pb-2">
            Email
          </label>

          <input
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
            type="password"
            id="password"
            className="font-sans rounded-md block text leading-5 w-full py-3 px-3 border-2 border-sky-600 text-gray-500 shadow-sm focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-500"
          />
        </div>

        <button className="w-full text-white border-2 rounded-md bg-sky-500 px-3 py-2 text-xl border-sky-500 focus:ring focus:ring-sky-200 focus:border-sky-500">
          Continue
        </button>
      </Form>
    </div>
  );
}
