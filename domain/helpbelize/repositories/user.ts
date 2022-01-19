import { db } from "../../../app/utils/prisma.server";
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
    const user = await db.user.create({ data: { email, password } });

    return new User({
      ...user,
    });
  }
}
