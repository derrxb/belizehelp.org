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
    <div className="flex h-full w-full flex-row bg-black">
      {state.matches("welcome") ? (
        <>
          <div className="flex h-full w-1/2 flex-col items-center justify-center">
            <h1 className="pb-4 text-5xl font-extrabold text-white">
              Get help in your time of need
            </h1>

            <span className="pb-4 text-center text-2xl font-semibold text-white">
              Share your story in 3 easy steps to get help from others.
            </span>

            <button
              className="rounded border-2 border-pink-600 py-2 px-4 text-center font-bold text-white"
              onClick={() => send({ type: "START" })}
            >
              Tell your story
            </button>
          </div>

          <div className="flex h-full w-1/2">
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
          <div className="flex h-full w-1/2 flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <h1 className="pb-4 text-5xl font-extrabold text-white">
              What's your story?
            </h1>

            <span className="pb-4 text-center text-2xl font-semibold text-white">
              Tell your story so that others can understand why they should
              donate to your cause.
            </span>
          </div>

          <div className="flex h-full w-1/2 flex-col bg-white">
            <div className="flex flex-col pb-4">
              <label htmlFor="title" className="pb-2 text-lg text-gray-800">
                Title
              </label>

              <input
                name="title"
                required
                autoComplete="off"
                id="title"
                type="email"
                className="font-sans text block w-full rounded-md border-2 border-sky-600 py-3 px-3 leading-5 text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring focus:ring-sky-200"
              />
            </div>

            <div className="flex flex-col pb-4">
              <label htmlFor="content" className="pb-2 text-lg text-gray-800">
                Your story
              </label>

              <input
                name="content"
                required
                autoComplete="off"
                id="content"
                type="text"
                className="font-sans text block w-full rounded-md border-2 border-sky-600 py-3 px-3 leading-5 text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring focus:ring-sky-200"
              />
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default YourStory;
