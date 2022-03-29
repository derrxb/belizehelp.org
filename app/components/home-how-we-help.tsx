import donators from "~/images/donators.svg";
import seekers from "~/images/seekers.svg";

export default function HomeHowWeHelp() {
  return (
    <div className="flex flex-col w-full text-center py-8 md:py-16 px:0 md:px-32">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-50 pb-16">
        How do we help you?
      </h2>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2h-[480px]">
        <div className="flex flex-col items-center justify-center text-left mb-4 md:mb-0">
          <div className="flex flex-col dark:bg-dark-gray rounded-lg p-8 md:p-14 h-72 w-full md:w-[480px]">
            <div className="flex items-center pb-8 px-0 md:px-4">
              <h3 className="font-medium text-3xl text-gray-50 pr-4">
                For Donators
              </h3>
              <img src={donators} className="h-12 w-12" alt="donators" />
            </div>

            <p className="text-gray-50 text-lg">
              We connect you with verified Belizeans who are currently
              experiencing unfortunate circumstances.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-left mb-4 md:mb-0">
          <div className="flex flex-col dark:bg-dark-gray rounded-lg p-8 md:p-14 h-72 w-full md:w-[480px]">
            <div className="flex items-center pb-8 px-0 md:px-4">
              <h3 className="font-medium text-3xl text-gray-50 pr-4">
                For Seekers
              </h3>
              <img src={seekers} className="h-12 w-12" alt="seeker" />
            </div>

            <p className="text-gray-50 text-lg">
              We connect you with Belizeans who can make reliable donations to
              help you through your difficult time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
