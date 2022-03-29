import chimp from "~/mailchimp.server";
import User from "../entities/user";

export default class UserRepository {
  static async findByEmail(email: string) {
    const user = await db.user.findFirst({ where: { email } });

    if (!user) {
      throw new Error("User does not exist");
    }

    return new User({
      ...user,
    });
  }

  static async createUser(email: string, password: string) {
    // const user = await db.user.create({ data: { email, password } });
    const user = {} as any;

    return new User({
      ...user,
    });
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
