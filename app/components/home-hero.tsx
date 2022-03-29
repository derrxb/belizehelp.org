import { Link } from "remix";
import connection from "~/images/connection.svg";

export default function HomeHero() {
  return (
    <div className="mb-0 grid h-fit min-h-[60vh] w-full grid-cols-1 gap-2 py-0 md:mb-16 md:min-h-[70vh] md:grid-cols-2 md:py-16">
      <div className="flex h-full flex-col justify-center">
        <h1 className="pb-4 text-5xl font-bold text-gray-900 dark:text-gray-50 md:text-6xl">
          A better way to help{" "}
          <span className="text-pink-500">Belizeans in need</span>
        </h1>

        <div className="w-full md:w-[560px]">
          <p className="py-4 text-xl text-gray-900 dark:text-gray-200 md:text-2xl">
            Our goal is to build a community in which Belizeans can assist
            others who are going through a difficult time in their life.
          </p>
        </div>

        <div className="flex items-center py-4">
          <Link
            to="/request-help"
            className="mr-4 rounded-md px-6 py-3 font-bold text-white hover:text-pink-600"
          >
            Donate
          </Link>

          <Link
            to="/request-help"
            className="rounded-md bg-pink-600 px-6 py-3 font-bold text-white hover:bg-pink-400 hover:text-pink-600"
          >
            Ask for Help
          </Link>
        </div>
      </div>

      <div className="hidden h-full items-center text-pink-500 md:flex">
        <img
          alt="helping others"
          src={connection}
          className="h-[320px] w-[480px] xl:h-[480px] xl:w-[640px]"
        />
      </div>
    </div>
  );
}
