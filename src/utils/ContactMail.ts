"use server";

import React from "react";
import { generateEmailTemplate } from "./emailTemplate";
import { sendmail } from "./mail";

interface SendFuncProps {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const send: React.FC<SendFuncProps> = async ({
  name,
  phone,
  email,
  message,
}) => {
  const emailBody = generateEmailTemplate({
    name,
    phone,
    email,
    message,
  });

  try {
    await sendmail({
      to: "danishshaikh.st@gmail.com",
      name: "Caliber Star Watches",
      subject: "Enquiry From Caliber Star Watches",
      body: emailBody,
    });

    return true;
  } catch (error) {
    console.error("Error sending mail:", error);
    return false;
  }
};
