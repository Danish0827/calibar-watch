import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { contactFormSubmission } from "@/utils/ContactSubmission";
import { send } from "@/utils/ContactMail";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  productTitle: string;
  productModel: string;
  productCode: string;
}

interface Errors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

const ContactForm = ({ productTitle, productModel, productCode }: any) => {
  console.log(productTitle, productModel, productCode);

  const [formData, setFormData] = useState<FormData>({
    productTitle: productTitle,
    productModel: productTitle,
    productCode: productTitle,
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  

  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.name) newErrors.name = "phone is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";
    if (Object.keys(newErrors).length > 0) {
      const errorMessages = Object.values(newErrors).join("\n");
      alert(errorMessages);
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContactFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitting(true);

      const { name, phone, email, message } = formData;
      if (name && phone && email && message) {
        try {
          const response = await contactFormSubmission(
            name,
            phone,
            email,
            message
          );

          // console.log(response, "jhgfhd");

          if (response.status === 200) {
            // console.log(response, "Form submission successful!");

            // toast("🥳⚡The message has been sent successfully!", {
            //   position: "top-right",
            //   autoClose: 5000,
            //   hideProgressBar: false,
            //   closeOnClick: true,
            //   pauseOnHover: true,
            //   draggable: true,
            //   progress: undefined,
            //   theme: "dark",
            //   transition: Bounce,
            // });

            const mailSent = await send({
              name,
              phone,
              email,
              message,
              productTitle,
              productModel,
              productCode,
            });

            if (mailSent) {
              toast("🥳⚡The mail has been sent successfully!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
              });

              setFormData({
                name: "",
                phone: "",
                email: "",
                message: "",
                productTitle,
                productModel,
                productCode,
              });
            }
          } else {
            toast.error("Failed to send email. Please try again.");
          }
        } catch (error) {
          toast.error("An error occurred. Please try again.");
        } finally {
          setSubmitting(false);
        }
      }
    }
  };

  return (
    <>
      <form onSubmit={handleContactFormSubmit}>
        <div className="mb-4">
          <input
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            className="w-full md:px-[20px] px-1 py-[10px]  bg-transparent border-gray-100 border-b-2 text-white focus:outline-none "
          />
        </div>
        <div className="mb-4">
          <input
            placeholder="Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="number"
            className="w-full md:px-[20px] px-1 py-[10px] bg-transparent border-gray-100 border-b-2 text-white focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full md:px-[20px] px-1 py-[10px]  bg-transparent border-gray-100 border-b-2 text-white focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <textarea
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-32 md:px-[20px] px-1 py-[10px]  bg-transparent border-gray-100 border-b-2 text-white focus:outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-transparent text-white px-6 py-4 rounded w-full border-2 text-xl border-white  "
        >
          {submitting ? "Sending" : "Send"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
