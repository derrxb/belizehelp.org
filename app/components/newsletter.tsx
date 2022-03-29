export default function Newsletter() {
  return (
    <div className="w-full my-20">
      <div className="bg-gradient-to-tr from-rose-600 via-rose-500 to-rose-600 flex flex-col rounded-md shadow-md h-96 justify-center p-16">
        <h3 className="text-4xl font-bold text-gray-900 dark:text-gray-50 self-center pb-4">
          Get notified when we're launching.
        </h3>

        <p className="text-xl text-gray-900 dark:text-gray-200 self-center pb-4">
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
            className="py-4 px-4 w-fit md:w-[480px] border-2 border-white focus:ring-4 focus:ring-indigo-600 text-lg rounded-md mr-4"
          />

          <button className="text-lg px-2 md:px-8 py-4 bg-black text-white rounded-md w-[120px]">
            Notify me
          </button>
        </div>
      </div>
    </div>
  );
}
