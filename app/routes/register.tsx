import { Form, MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return {
    title: "Register",
    description:
      "Register to find Belizeans in need or to request help from other Belizeans.",
  };
};

export default function Login() {
  return (
    <div className="self-center rounded p-4 border-2 border-gray-200 mt-[5%]">
      <h1 className="text-2xl font-extrabold">Register</h1>

      <Form className="py-4 self-center w-[480px]" autoComplete="off">
        <div className="flex flex-col pb-4">
          <label htmlFor="name" className="text-gray-800 text-lg pb-2">
            Name
          </label>

          <input
            id="name"
            type="text"
            className="font-sans rounded-md block text leading-5 w-full py-3 px-3 border-2 border-sky-600 text-gray-500 shadow-sm focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-500"
          />
        </div>

        <div className="flex flex-col pb-4">
          <label htmlFor="email" className="text-gray-800 text-lg pb-2">
            Email
          </label>

          <input
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
            autoComplete="off"
            type="password"
            id="password"
            className="font-sans rounded-md block text leading-5 w-full py-3 px-3 border-2 border-sky-600 text-gray-500 shadow-sm focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-500"
          />
        </div>

        <button className="w-full text-white border-2 rounded-md bg-sky-500 px-3 py-2 text-xl border-sky-500 focus:ring focus:ring-sky-200 focus:border-sky-500">
          Register Account
        </button>
      </Form>
    </div>
  );
}
