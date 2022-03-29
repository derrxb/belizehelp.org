export default function Newsletter() {
  return (
    <div className="my-20 w-full">
      <div className="flex h-96 flex-col justify-center rounded-md bg-gradient-to-tr from-rose-600 via-rose-500 to-rose-600 p-16 shadow-md">
        <h3 className="self-center pb-4 text-4xl font-bold text-gray-900 dark:text-gray-50">
          Get notified when we're launching.
        </h3>

        <p className="self-center pb-4 text-xl text-gray-900 dark:text-gray-200">
          We will send you an email as soon as you can sign up as a donator or
          seeker.
        </p>

        <div className="flex items-center self-center pb-6">
          <label htmlFor="email" className="sr-only">
            Email
          </label>

          <input
            id="email"
            name="email"
            placeholder="Email"
            className="mr-4 w-fit rounded-md border-2 border-white py-4 px-4 text-lg focus:ring-4 focus:ring-indigo-600 md:w-[480px]"
          />

          <button className="w-[120px] rounded-md bg-black px-2 py-4 text-lg text-white md:px-8">
            Notify me
          </button>
        </div>
      </div>
    </div>
  );
}
