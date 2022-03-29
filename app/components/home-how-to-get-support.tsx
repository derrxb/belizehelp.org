import { Link } from "remix";
import Neighborhood from "~/images/neighborhood.svg";

export default function HomeHowToGetSupport() {
  return (
    <div className="mb-16 grid min-h-[70vh] w-full grid-cols-1 gap-2 py-0 px-4 md:grid-cols-2 md:py-16 md:px-60">
      <div className="flex flex-col justify-center">
        <span className="pb-4 text-base font-medium text-pink-600">
          For Seekers
        </span>

        <h4 className="pb-4 text-xl font-bold text-gray-900 dark:text-gray-50">
          How to seek help?
        </h4>
        <div className="pb-4 text-lg text-gray-900 dark:text-gray-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
          pariatur eligendi quisquam repellendus suscipit blanditiis maiores
          reiciendis? Animi, cum tenetur perspiciatis aliquid, repellat dolorum
          consectetur, harum quisquam incidunt sed iste!
        </div>

        <Link
          to="/register"
          className="inline-flex items-center pb-4 text-lg text-gray-900 dark:text-gray-50"
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
          className="h-[480px] w-[360px]"
          alt="neighborhood"
        />
      </div>
    </div>
  );
}
