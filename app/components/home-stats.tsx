const SingleStatistic = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="mx-0 flex w-1/2 flex-col items-center justify-center justify-items-start px-0 py-4 text-center md:mx-4 md:w-fit  md:py-2 xl:px-16">
      <span className="text-5xl font-bold text-gray-900 dark:text-gray-50">
        {value}
      </span>
      <span className="text-2xl text-gray-500 dark:text-gray-400">{name}</span>
    </div>
  );
};

export default function HomeStats() {
  return (
    <div className="flex w-full justify-center pb-16">
      <div className="flex w-full flex-wrap items-center justify-between md:flex-nowrap">
        <SingleStatistic name="Donators" value="10+" />
        <SingleStatistic name="Donations" value="500+" />
        <SingleStatistic name="Seekers" value="100+" />
        <SingleStatistic name="Assisted" value="100+" />
      </div>
    </div>
  );
}
