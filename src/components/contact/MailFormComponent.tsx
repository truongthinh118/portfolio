"use client";
import { useState, useMemo } from "react";
import { Input, Textarea } from "@nextui-org/react";
import sendMail from "@/actions/SendMail";
import ContactMethodComponent from "./ContactMethodComponent";
import Link from "next/link";
import SubmitButtonComponent from "./SubmitButtonComponent";
import { toast } from "sonner";
import { EnvelopeIcon, UserIcon } from "../icon/Icon";

export default function MailForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const inputClass = {
    base: "data-[has-label=true]:mt-[calc(theme(fontSize.large)_+_16px)]",
    label:
      "text-3xl after:text-inherit pb-1.5 group-data-[filled-within=true]:text-current font-light top-[40%]",
    inputWrapper:
      "rounded-[5px] min-h-16 h-16 bg-default dark:group-data-[focus=true]:bg-default",
    input:
      "text-lg group-data-[has-value=true]:text-current placeholder:text-current placeholder:italic",
  };

  const validateEmail = (address: string) =>
    address.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = useMemo(() => {
    if (address === "") return false;

    return validateEmail(address) ? false : true;
  }, [address]);

  return (
    <>
      <form
        action={async () => {
          validateEmail(address);
          const res = await sendMail(name, address, message);
          if (res && !!res.result) toast.success("Message sent successfully.");
          else toast.error(res?.errorMsg);
        }}
        className="flex flex-col gap-8 p-8"
      >
        <Input
          type="name"
          classNames={inputClass}
          label="Your Name"
          placeholder="Input Your Name"
          labelPlacement="outside"
          startContent={<UserIcon className="h-12 p-2 text-current" />}
          value={name}
          onValueChange={setName}
          autoComplete="given-name"
          isRequired
          isClearable
          fullWidth
        />
        <Input
          type="email"
          classNames={inputClass}
          label="Your Email"
          placeholder="Input Your Email"
          labelPlacement="outside"
          startContent={
            <EnvelopeIcon className="h-12 fill-current p-2 text-current" />
          }
          autoComplete="email"
          value={address}
          onValueChange={setAddress}
          errorMessage={isInvalid && "Please enter a valid email"}
          isRequired
          isClearable
          fullWidth
        />
        <Textarea
          classNames={{
            label:
              "text-3xl after:text-inherit group-data-[filled-within=true]:text-current font-light",
            inputWrapper:
              "rounded-[5px] bg-default dark:group-data-[focus=true]:bg-default",
            input:
              "text-lg group-data-[has-value=true]:text-current placeholder:text-current placeholder:italic",
          }}
          label="Your Message"
          labelPlacement="outside"
          placeholder="Enter your message"
          value={message}
          onValueChange={setMessage}
          isRequired
          size="lg"
          maxRows={7}
        />
        <div className="text-tiny sm:text-base lg:hidden">
          You can take a look my resume at{" "}
          <Link className="font-bold" href={"/resume"}>
            here
          </Link>
          !
        </div>
        <div className="flex flex-row justify-between gap-2">
          <div className="lg:hidden">
            <ContactMethodComponent />
          </div>
          <SubmitButtonComponent />
        </div>
      </form>
    </>
  );
}
