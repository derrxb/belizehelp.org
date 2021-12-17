import { useMachine } from "@xstate/react";
import { createMachine } from "xstate";
import welcomeVideo from "../../public/videos/request-help-welcome.mp4";

const machine = createMachine({
  id: "post-form",
  initial: "welcome",
  states: {
    welcome: {},
    addingBackgroundInformation: {},
    addingNeeds: {},
  },
});

type Props = {
  onComplete: (value: any) => void;
};

const YourStory = ({ onComplete }: Props) => {
  const [state, send] = useMachine(machine);

  return (
    <div className="flex flex-row w-full h-full">
      {state.matches("welcome") ? (
        <>
          <div className="flex w-1/2 bg-black"></div>
          <div className="flex w-1/2">
            <video src={welcomeVideo} height="100" width="100%" />
          </div>
        </>
      ) : null}

      <div className="flex flex-col w-full">
        {state.matches("addingBackgroundInformation") ? (
          <>
            <div className="flex flex-col pb-4">
              <label htmlFor="title" className="text-gray-800 text-lg pb-2">
                Title
              </label>

              <input
                name="title"
                required
                autoComplete="off"
                id="title"
                type="email"
                className="font-sans rounded-md block text leading-5 w-full py-3 px-3 border-2 border-sky-600 text-gray-500 shadow-sm focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-500"
              />
            </div>

            <div className="flex flex-col pb-4">
              <label htmlFor="content" className="text-gray-800 text-lg pb-2">
                Your story
              </label>

              <input
                name="content"
                required
                autoComplete="off"
                id="content"
                type="text"
                className="font-sans rounded-md block text leading-5 w-full py-3 px-3 border-2 border-sky-600 text-gray-500 shadow-sm focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-500"
              />
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default YourStory;
