import emailjs from "@emailjs/browser";

type SendMailResult = {
  result: boolean;
  errorMsg?: string;
};

export default async function sendMail(
  name: string,
  address: string,
  message: string,
): Promise<SendMailResult | undefined> {
  if (name && address && message) {
    return emailjs
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
          return { result: true };
        },
        (error) => {
          const errorMsg = error.text;
          return { result: false, errorMsg };
        },
      );
  }
}
