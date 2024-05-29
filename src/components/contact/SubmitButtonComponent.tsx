"use client";
import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

export default function SubmitButtonComponent() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      isDisabled={pending}
      isLoading={pending}
      spinner={
        <svg
          className="h-5 w-5 animate-spin text-current"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            fill="currentColor"
          />
        </svg>
      }
      className="w-full rounded-[5px]
                                bg-content1-foreground
                                px-5 py-2.5 text-center 
                                text-sm font-medium text-default 
                                hover:bg-content1-foreground/[.8] focus:bg-content1-foreground/[.8] focus:outline-none 
                                focus:ring-4
                               "
    >
      {!pending ? "Send" : "Sending..."}
    </Button>
  );
}
