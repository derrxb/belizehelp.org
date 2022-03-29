import donators from "~/images/donators.svg";
import seekers from "~/images/seekers.svg";

export default function HomeHowWeHelp() {
  return (
    <div className="px:0 flex w-full flex-col py-8 text-center md:py-16 md:px-32">
      <h2 className="pb-16 text-3xl font-bold text-gray-900 dark:text-gray-50">
        How do we help you?
      </h2>

      <div className="gap-2h-[480px] grid w-full grid-cols-1 md:grid-cols-2">
        <div className="mb-4 flex flex-col items-center justify-center text-left md:mb-0">
          <div className="flex h-72 w-full flex-col rounded-lg p-8 dark:bg-dark-gray md:w-[480px] md:p-14">
            <div className="flex items-center px-0 pb-8 md:px-4">
              <h3 className="pr-4 text-3xl font-medium text-gray-50">
                For Donators
              </h3>
              <img src={donators} className="h-12 w-12" alt="donators" />
            </div>

            <p className="text-lg text-gray-50">
              We connect you with verified Belizeans who are currently
              experiencing unfortunate circumstances.
            </p>
          </div>
        </div>

        <div className="mb-4 flex flex-col items-center justify-center text-left md:mb-0">
          <div className="flex h-72 w-full flex-col rounded-lg p-8 dark:bg-dark-gray md:w-[480px] md:p-14">
            <div className="flex items-center px-0 pb-8 md:px-4">
              <h3 className="pr-4 text-3xl font-medium text-gray-50">
                For Seekers
              </h3>
              <img src={seekers} className="h-12 w-12" alt="seeker" />
            </div>

            <p className="text-lg text-gray-50">
              We connect you with Belizeans who can make reliable donations to
              help you through your difficult time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
