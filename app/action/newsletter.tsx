import React from "react";
import { ActionFunction } from "remix";

export const action: ActionFunction = async ({ request }) => {
  return addUserToNewsletter(request);
};

export default function Newsletter() {
  return (
    <>
      <h1>Yay! You'll be the first to know when we launch!!</h1>
    </>
  );
}
