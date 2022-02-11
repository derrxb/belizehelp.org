import chimp from "@mailchimp/mailchimp_marketing";
import { MAIL_CHIMP_API_KEY } from "./config";

chimp.setConfig({
  apiKey: MAIL_CHIMP_API_KEY,
  server: "us20",
});

export default chimp;
