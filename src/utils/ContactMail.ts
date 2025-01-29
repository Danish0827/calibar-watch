"use server";

import React from "react";
import { generateEmailTemplate } from "./emailTemplate";
import { sendmail } from "./mail";

interface SendFuncProps {
  name: string;
  cname: string;
  phone: string;
  email: string;
  message: string;
  productTitle: string;
  productModel: string;
  productCode: string;
}

export const send: React.FC<SendFuncProps> = async ({
  name,
  cname,
  phone,
  email,
  message,
  productTitle,
  productModel,
  productCode,
}) => {
  const emailBody = generateEmailTemplate({
    name,
    cname,
    phone,
    email,
    message,
    productTitle,
    productModel,
    productCode,
  });
  // console.log(
  //   name,
  //   cname,
  //   phone,
  //   email,
  //   message,
  //   productTitle,
  //   productModel,
  //   productCode
  // );

  try {
    await sendmail({
      to: "info@caliberstar.com",
      name: "Caliber Star",
      subject: "Enquiry From Caliber Star ",
      body: emailBody,
    });

    return true;
  } catch (error) {
    console.error("Error sending mail:", error);
    return false;
  }
};
