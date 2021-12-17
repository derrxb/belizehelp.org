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
    <Document>
      <Layout loaderData={data}>
        <Outlet />
      </Layout>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

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
    <html lang="en">
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
      <body>
        {children}

        <ScrollRestoration />
        <Scripts />

        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({
  children,
  loaderData,
}: {
  children: React.ReactNode;
  loaderData?: UserSession;
}) {
  return (
    <>
      <nav className="flex flex-row justify-between mx-20 py-4 items-center">
        <Link to="/" className="font-extrabold text-3xl">
          Help Belize
        </Link>

        <ul className="flex flex-row items-center">
          <li className="py-4 px-6 hover:underline">
            <Link to="/how-it-works">How it works</Link>
          </li>

          <li className="py-4 px-6 hover:underline">
            <Link to="/about">About</Link>
          </li>

          {loaderData?.isAuthenticated ? (
            <>
              <li className="py-4 px-6 hover:underline">
                <Link to="/posts/new">Tell your Story</Link>
              </li>
            </>
          ) : (
            <div>
              <li className="py-4 px-6 hover:underline">
                <Link to="/login">Login</Link>
              </li>

              <li className="px-4">
                <Link
                  to="/register"
                  className="bg-sky-600 font-bold hover:bg-sky-400 px-6 py-3 rounded-md shadow-md text-white hover:text-sky-900"
                >
                  Get Started
                </Link>
              </li>
            </div>
          )}
        </ul>
      </nav>

      <main className="flex flex-col w-full h-full">{children}</main>
    </>
  );
}
