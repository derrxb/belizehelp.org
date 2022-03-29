import { supabase } from "~/config/index.server";
import chimp from "~/mailchimp.server";
import User from "../entities/user";

export default class UserRepository {
  static buildUser(data: any) {
    if (!data || typeof data === "undefined") {
      return null;
    }

    return new User({
      email: data?.email,
      id: data?.id,
      name: data?.name,
    });
  }

  static async findByEmail(email: string) {
    const user = await supabase.from("users").select("*").eq("email", email);

    return this.buildUser(user);
  }

  static async createUser(email: string, password: string) {
    // TODO: We need to use this for authentication stuff
    const user = await supabase.auth.signUp({ email, password });
    const userResult = await supabase
      .from("user")
      .upsert({ name: "New User", email });

    return this.buildUser(userResult.body?.[0]);
  }

  static async subscribeToNewsletter(email: string) {
    await chimp.lists.addListMember("602515", {
      email_address: email,
      status: "pending",
      timestamp_signup: new Date().getTime().toString(),
      tags: ["donator", "donations"],
    });
  }
}
