import { json } from "remix";
import { getErrorMessage } from "~/utils";
import UserRepository from "../../domain/helpbelize/repositories/user";

function getErrorForEmail(email: string | null) {
  if (!email) return `Email is required`;
  if (!/^.+@.+\..+$/.test(email)) return `That's not an email`;
  return null;
}

export default async function subscribeToNewsletter(request: Request) {
  const requestText = await request.text();
  const form = new URLSearchParams(requestText);

  const fields: { email: string } = {
    email: form.get("email") ?? "",
  };

  const errors: { email: string | null; generalError: string | null } = {
    email: getErrorForEmail(fields.email),
    generalError: null,
  };

  let data;

  if (Object.values(errors).some((err) => err !== null)) {
    data = { status: "error", errors };
    return json(data, 400);
  }

  try {
    await UserRepository.subscribeToNewsletter(fields.email);
  } catch (error) {
    errors.generalError = getErrorMessage(error);
    data = { status: "error", errors };
    return json(data, 500);
  }

  data = { status: "success" };
  return json(data);
}
