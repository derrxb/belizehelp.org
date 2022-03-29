import { Link } from "remix";
import Neighborhood from "~/images/neighborhood.svg";

export default function HomeHowToGetSupport() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 min-h-[70vh] py-0 md:py-16 mb-16 px-4 md:px-60">
      <div className="flex flex-col justify-center">
        <span className="text-base font-medium text-pink-600 pb-4">
          For Seekers
        </span>

        <h4 className="text-xl font-bold text-gray-900 dark:text-gray-50 pb-4">
          How to seek help?
        </h4>
        <div className="text-lg text-gray-900 dark:text-gray-50 pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          pariatur eligendi quisquam repellendus suscipit blanditiis maiores
          reiciendis? Animi, cum tenetur perspiciatis aliquid, repellat dolorum
          consectetur, harum quisquam incidunt sed iste!
        </div>

        <Link
          to="/register"
          className="inline-flex items-center text-lg text-gray-900 dark:text-gray-50 pb-4"
        >
          <span className="mr-2">Get Started</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </Link>
      </div>

      <div className="flex justify-center">
        <img
          src={Neighborhood}
          className="w-[360px] h-[480px]"
          alt="neighborhood"
        />
      </div>
    </div>
  );
}
