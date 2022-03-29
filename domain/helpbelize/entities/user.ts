type UserModel = {
  email: string;
  id: number;
  name: string;
};

export default class User {
  private email: UserModel["email"];
  private id: UserModel["id"];
  private name: UserModel["name"];

  constructor(props: UserModel) {
    this.email = props.email;
    this.id = props.id;
    this.name = props.name;
  }

  get = () => {
    return {
      id: this.id,
      email: this.email,
      name: this.name,
    };
  };
}
