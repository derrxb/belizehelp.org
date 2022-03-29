export default function HomeStats() {
  return (
    <div className="flex justify-center w-full pb-16">
      <div className="flex flex-wrap md:flex-nowrap items-center">
        <div className="flex flex-col w-1/2 md:w-fit items-center justify-center px:0 md:px-20 mx-0 md:mx-4 py-4 md:py-2 justify-items-start text-center">
          <span className="text-5xl font-bold text-gray-900 dark:text-gray-50">
            5+
          </span>
          <span className="text-2xl text-gray-500 dark:text-gray-400">
            Donators
          </span>
        </div>

        <div className="flex flex-col w-1/2 md:w-fit items-center justify-center px:0 md:px-20 mx-0 md:mx-4 py-4 md:py-2 justify-items-start text-center">
          <span className="text-5xl font-bold text-gray-900 dark:text-gray-50">
            500+
          </span>
          <span className="text-2xl text-gray-500 dark:text-gray-400">
            Donations
          </span>
        </div>

        <div className="flex flex-col w-1/2 md:w-fit items-center justify-center px:0 md:px-20 mx-0 md:mx-4 py-4 md:py-2 justify-items-start text-center">
          <span className="text-5xl font-bold text-gray-900 dark:text-gray-50">
            15+
          </span>
          <span className="text-2xl text-gray-500 dark:text-gray-400">
            Seekers
          </span>
        </div>

        <div className="flex flex-col w-1/2 md:w-fit items-center justify-center px:0 md:px-20 mx-0 md:mx-4 py-4 md:py-2 justify-items-start text-center">
          <span className="text-5xl font-bold text-gray-900 dark:text-gray-50">
            10+
          </span>
          <span className="text-2xl text-gray-500 dark:text-gray-400">
            Assisted
          </span>
        </div>
      </div>
    </div>
  );
}
