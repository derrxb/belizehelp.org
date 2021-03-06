import clsx from "clsx";
import {
  Link,
  Links,
  LinksFunction,
  LiveReload,
  LoaderFunction,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useLoaderData,
  useLocation,
} from "remix";
import globalStylesUrl from "~/styles/app.css";
import User from "../domain/helpbelize/entities/user";
import { getSession } from "./session.server";

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: globalStylesUrl }];
};

export let loader: LoaderFunction = async ({ request }) => {
  let user;
  let session = await getSession(request.headers.get("Cookie"));

  try {
    user = new User(session.get("user"));
  } catch (e) {}

  return {
    isAuthenticated: !!user,
    user: user?.get(),
  };
};

type UserSession = {
  isAuthenticated: boolean;
  user: { name: string; email: string; id: string };
};

export default function App() {
  const data = useLoaderData() as UserSession;

  return (
    <Document title="BelizeHelp.org | Find and Help Belizeans in Need">
      <Layout loaderData={data}>
        <Outlet />
      </Layout>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(JSON.stringify(error));

  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
      </Layout>
    </Document>
  );
}

export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
      </Layout>
    </Document>
  );
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en" className="flex h-full w-full flex-col">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        ></link>

        <Meta />
        <Links />
      </head>
      <body className="flex h-full w-full flex-col bg-white dark:bg-black">
        {children}

        <ScrollRestoration />
        <Scripts />

        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

const shouldFixNav = ["/login", "/register"];

function Layout({
  children,
  loaderData,
}: {
  children: React.ReactNode;
  loaderData?: UserSession;
}) {
  const location = useLocation();
  const isFixedNav = shouldFixNav.includes(location.pathname);

  return (
    <>
      <nav
        className={clsx(
          "z-30 flex w-full flex-row items-center justify-between px-8 py-4 text-gray-900 dark:text-gray-50 md:px-20 ",
          {
            "fixed dark:bg-black dark:bg-opacity-5": isFixedNav,
          }
        )}
      >
        <Link to="/" className="text-3xl font-extrabold">
          {/* <img src={logo} /> */}
          <h1>Belize Help</h1>
        </Link>

        <ul className="hidden flex-row items-center md:flex">
          <li className="py-4 px-6">
            <Link
              to="/about"
              className="font-bold hover:text-pink-600 dark:text-white"
            >
              About
            </Link>
          </li>

          <li className="py-4 px-6">
            <Link
              to="/how-it-works"
              className="font-bold hover:text-pink-600 dark:text-white"
            >
              How it works
            </Link>
          </li>

          <li className="py-4 px-6">
            <Link
              to="/how-it-works"
              className="font-bold hover:text-pink-600 dark:text-white"
            >
              News & Stories
            </Link>
          </li>

          {loaderData?.isAuthenticated ? (
            <>
              <li className="py-4 px-6">
                <Link
                  to="/posts/new"
                  className="font-bold hover:text-pink-600 dark:text-white"
                >
                  Tell your Story
                </Link>
              </li>
            </>
          ) : (
            <div className="flex items-center">
              <li className="py-4 px-6">
                <Link
                  to="/login"
                  className="font-bold hover:text-pink-600 dark:text-white"
                >
                  Login
                </Link>
              </li>

              <li className="px-4">
                <Link
                  to="/register"
                  className="rounded-md bg-pink-600 px-6 py-3 font-bold text-white hover:bg-pink-400 hover:text-pink-900"
                >
                  Register
                </Link>
              </li>
            </div>
          )}
        </ul>
      </nav>

      <main className="flex h-full w-full flex-col">{children}</main>
    </>
  );
}
