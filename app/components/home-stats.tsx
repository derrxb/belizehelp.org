export default function HomeStats() {
  return (
    <div className="flex justify-center w-full pb-16">
      <div className="flex items-center">
        <div className="flex flex-col items-center justify-center px-20 mx-4">
          <span className="text-5xl font-bold text-gray-900 dark:text-gray-50">
            5+
          </span>
          <span className="text-2xl text-gray-500 dark:text-gray-400">
            Donators
          </span>
        </div>

        <div className="flex flex-col items-center justify-center px-20 mx-4">
          <span className="text-5xl font-bold text-gray-900 dark:text-gray-50">
            500+
          </span>
          <span className="text-2xl text-gray-500 dark:text-gray-400">
            Donations
          </span>
        </div>

        <div className="flex flex-col items-center justify-center px-20 mx-4">
          <span className="text-5xl font-bold text-gray-900 dark:text-gray-50">
            15+
          </span>
          <span className="text-2xl text-gray-500 dark:text-gray-400">
            Seekers
          </span>
        </div>

        <div className="flex flex-col items-center justify-center px-20 mx-4">
          <span className="text-5xl font-bold text-gray-900 dark:text-gray-50">
            10+
          </span>
          <span className="text-2xl text-gray-500 dark:text-gray-400">
            Belizeans Helped
          </span>
        </div>
      </div>
    </div>
  );
}
