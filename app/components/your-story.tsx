import { useMachine } from "@xstate/react";
import { createMachine } from "xstate";
import welcomeVideo from "../../public/videos/welcome.mp4";

const machine = createMachine({
  id: "post-form",
  initial: "welcome",
  states: {
    welcome: {
      on: {
        START: {
          target: "addingBackgroundInformation",
        },
      },
    },
    addingBackgroundInformation: {
      on: {
        CANCEL: {
          target: "cancel",
        },
        SAVE: {
          target: "saveBackgroundInformation",
        },
      },
    },
    addingNeeds: {
      on: {
        SAVE: {
          target: "createPost",
        },
      },
    },
    createPost: {
      invoke: {
        src: "createPost",
        onDone: {
          target: "finished",
        },
        onError: {
          target: "addingNeeds",
        },
      },
    },
    finished: {},
    cancel: {},
  },
});

type Props = {
  onComplete: (value: any) => void;
};

const YourStory = ({ onComplete }: Props) => {
  const [state, send] = useMachine(machine);

  return (
    <div className="flex flex-row w-full h-full bg-black">
      {state.matches("welcome") ? (
        <>
          <div className="flex flex-col items-center justify-center h-full w-1/2">
            <h1 className="text-5xl font-extrabold text-white pb-4">
              Get help in your time of need
            </h1>

            <span className="text-2xl font-semibold text-white pb-4 text-center">
              Share your story in 3 easy steps to get help from others.
            </span>

            <button
              className="text-white font-bold text-center py-2 px-4 rounded border-2 border-pink-600"
              onClick={() => send({ type: "START" })}
            >
              Tell your story
            </button>
          </div>

          <div className="flex w-1/2 h-full">
            <video
              autoPlay
              crossOrigin="anonymous"
              playsInline
              preload="auto"
              className="w-full object-cover object-center"
            >
              <source src={welcomeVideo} type="video/mp4" />
              Sorry, your browser doesn't support embedded videos.
            </video>
          </div>
        </>
      ) : null}

      {state.matches("addingBackgroundInformation") ? (
        <>
          <div className="flex flex-col items-center justify-center h-full w-1/2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <h1 className="text-5xl font-extrabold text-white pb-4">
              What's your story?
            </h1>

            <span className="text-2xl font-semibold text-white pb-4 text-center">
              Tell your story so that others can understand why they should
              donate to your cause.
            </span>
          </div>

          <div className="flex flex-col w-1/2 h-full bg-white">
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
          </div>
        </>
      ) : null}
    </div>
  );
};

export default YourStory;
