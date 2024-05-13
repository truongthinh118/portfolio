import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export default function sendMail(
  name: string,
  address: string,
  message: string,
) {
  if (name && address && message) {
    emailjs
      .send(
        "service_uqp42mn",
        "template_cam0i4u",
        { name, email: address, message },
        {
          publicKey: "2gh4dkYQw-bT5Z6s9",
          limitRate: { throttle: 30000 },
        },
      )
      .then(
        () => {
          toast.success("Message sent successfully.");
        },
        (error) => {
          const errorMsg = error.text;
          toast.error(errorMsg);
        },
      );
  }
}
