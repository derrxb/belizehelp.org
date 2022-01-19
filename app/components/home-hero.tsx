import { Link } from "remix";
import connection from "~/images/connection.svg";

export default function HomeHero() {
  return (
    <div className="w-full grid grid-cols-2 gap-2 h-[70vh] py-16 mb-16">
      <div className="flex flex-col h-full justify-center">
        <h1 className="text-gray-900 dark:text-gray-50 text-6xl font-bold pb-4">
          A better way to help{" "}
          <span className="text-pink-500">Belizeans in need</span>
        </h1>

        <div className="w-full md:w-[560px]">
          <p className="text-gray-900 dark:text-gray-200 text-2xl py-4">
            Our goal is to build a community in which Belizeans can assist
            others who are going through a difficult time in their life.
          </p>
        </div>

        <div className="flex items-center py-4">
          <Link
            to="/request-help"
            className="font-bold px-6 py-3 rounded-md text-white hover:text-pink-600 mr-4"
          >
            Donate
          </Link>

          <Link
            to="/request-help"
            className="bg-pink-600 font-bold hover:bg-pink-400 px-6 py-3 rounded-md text-white hover:text-pink-600"
          >
            Ask for Help
          </Link>
        </div>
      </div>

      <div className="text-pink-500 h-full flex items-center">
        <img src={connection} className="w-[640px] h-[480px]" />
      </div>
    </div>
  );
}
