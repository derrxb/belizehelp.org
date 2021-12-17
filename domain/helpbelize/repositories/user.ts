import { prisma } from "../../../prisma";
import User from "../entities/user";

export default class UserRepository {
  static async findByEmail(email: string) {
    await prisma.$connect();

    const user = await prisma.user.findFirst({ where: { email } });

    if (!user) {
      throw new Error("User does not exist");
    }

    await prisma.$disconnect();

    return new User({
      ...user,
    });
  }

  static async createUser(email: string, password: string) {
    await prisma.$connect();

    const user = await prisma.user.create({ data: { email, password } });

    await prisma.$disconnect();

    return new User({
      ...user,
    });
  }
}
