import { Authenticator, LocalStrategy } from "remix-auth";
import { sessionStorage } from "~/session.server";
import User from "../domain/helpbelize/entities/user";
import UserRepository from "../domain/helpbelize/repositories/user";

// Create an instance of the authenticator, pass a generic with what your
// strategies will return and will be stored in the session
export let authenticator = new Authenticator<User | null>(sessionStorage);

// Add the local strategy
authenticator.use(
  new LocalStrategy(
    // The strategy will use this URL to redirect the user in case it's logged-in
    // And to know if it should grab the username and password from the request
    // body in case of a POST request
    { loginURL: "/login" },
    async (email, password) => {
      // Find your user data in your database or external service
      let user = await UserRepository.findByEmail(email);

      await user.isValidPassword(password);

      return user;
    }
  ),
  // The name of the strategy, every strategy has a default name, only add one
  // if you want to override it (e.g. setup more than one strategy)
  "local"
);
