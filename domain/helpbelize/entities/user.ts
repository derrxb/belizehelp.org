import { User as UserModel } from "@prisma/client";
import bcrypt from "bcryptjs";

export default class User {
  private email: UserModel["email"];
  private id: UserModel["id"];
  private name: UserModel["name"];
  private password: UserModel["password"];

  constructor(props: UserModel) {
    this.email = props.email;
    this.id = props.id;
    this.name = props.name;
    this.password = props.password;
  }

  get = () => {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
    };
  };

  isValidPassword = async (password: string) => {
    const result = await bcrypt.compare(password, this.password);

    if (!result) {
      throw new Error("Password and email do not match");
    }

    return true;
  };
}
