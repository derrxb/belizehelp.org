export default function HomeStats() {
  return (
    <div className="flex w-full justify-center pb-16">
      <div className="flex flex-wrap items-center md:flex-nowrap">
        <div className="px:0 mx-0 flex w-1/2 flex-col items-center justify-center justify-items-start py-4 text-center md:mx-4 md:w-fit md:px-20 md:py-2">
          <span className="text-5xl font-bold text-gray-900 dark:text-gray-50">
            5+
          </span>
          <span className="text-2xl text-gray-500 dark:text-gray-400">
            Donators
          </span>
        </div>

        <div className="px:0 mx-0 flex w-1/2 flex-col items-center justify-center justify-items-start py-4 text-center md:mx-4 md:w-fit md:px-20 md:py-2">
          <span className="text-5xl font-bold text-gray-900 dark:text-gray-50">
            500+
          </span>
          <span className="text-2xl text-gray-500 dark:text-gray-400">
            Donations
          </span>
        </div>

        <div className="px:0 mx-0 flex w-1/2 flex-col items-center justify-center justify-items-start py-4 text-center md:mx-4 md:w-fit md:px-20 md:py-2">
          <span className="text-5xl font-bold text-gray-900 dark:text-gray-50">
            15+
          </span>
          <span className="text-2xl text-gray-500 dark:text-gray-400">
            Seekers
          </span>
        </div>

        <div className="px:0 mx-0 flex w-1/2 flex-col items-center justify-center justify-items-start py-4 text-center md:mx-4 md:w-fit md:px-20 md:py-2">
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
