import React, { ChangeEvent, FormEvent, useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { contactFormSubmission } from "@/utils/ContactSubmission";
import { send } from "@/utils/ContactMail";

interface FormData {
  name: string;
  cname: string;
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

const ContactForm = ({
  productTitle,
  productModel,
  productCode,
}: {
  productTitle: string;
  productModel: string;
  productCode: string;
}) => {
  const [formData, setFormData] = useState<FormData>({
    productTitle,
    productModel,
    productCode,
    name: "",
    cname: "",
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
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.phone) newErrors.phone = "Phone is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.message) newErrors.message = "Message is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fill all the required fields.");
      return false;
    }
    return true;
  };

  const handleContactFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmitting(true);

      try {
        formData.cname = formData.cname ? formData.cname : "-";
        const { name, cname, phone, email, message } = formData;
        // console.log(
        //   name,
        //   cname,
        //   phone,
        //   email,
        //   message,
        //   "name, cname, phone, email, message"
        // );

        const response = await contactFormSubmission(
          name,
          cname,
          phone,
          email,
          message
        );

        if (response.status === 200) {
          const mailSent = await send({
            name,
            cname,
            phone,
            email,
            message,
            productTitle,
            productModel,
            productCode,
          });

          if (mailSent) {
            toast.success("🥳⚡The mail has been sent successfully!", {
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
              cname: "",
              phone: "",
              email: "",
              message: "",
              productTitle,
              productModel,
              productCode,
            });
          } else {
            toast.error("Failed to send email. Please try again.");
          }
        } else {
          toast.error("Failed to send email -. Please try again.");
        }
      } catch (error) {
        toast.error("An error occurred. Please try again.");
      } finally {
        setSubmitting(false);
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleContactFormSubmit}>
        <div className="mb-4">
          <div className="relative w-full">
            <input
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              className="w-full md:px-[20px] px-1 py-[10px] bg-transparent border-gray-100 border-b-2 text-white focus:outline-none"
            />
            {formData.name ? (
              ""
            ) : (
              <span className="absolute left-16 top-1/2 transform -translate-y-1/2 text-red-500">
                *
              </span>
            )}
          </div>
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <input
            placeholder="Company Name"
            name="cname"
            value={formData.cname}
            onChange={handleChange}
            type="text"
            className="w-full md:px-[20px] px-1 py-[10px] bg-transparent border-gray-100 border-b-2 text-white focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <div className="relative w-full">
            <input
              placeholder="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="number"
              className="w-full md:px-[20px] px-1 py-[10px] bg-transparent border-gray-100 border-b-2 text-white focus:outline-none"
            />
            {formData.phone ? (
              ""
            ) : (
              <span className="absolute left-[70px] top-1/2 transform -translate-y-1/2 text-red-500">
                *
              </span>
            )}
          </div>
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>
        <div className="mb-4">
          <div className="relative w-full">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full md:px-[20px] px-1 py-[10px] bg-transparent border-gray-100 border-b-2 text-white focus:outline-none"
            />
            {formData.email ? (
              ""
            ) : (
              <span className="absolute left-16 top-1/2 transform -translate-y-1/2 text-red-500">
                *
              </span>
            )}
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <div className="relative w-full">
            <textarea
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full h-32 md:px-[20px] px-1 py-[10px] bg-transparent border-gray-100 border-b-2 text-white focus:outline-none"
            ></textarea>
            {formData.message ? (
              ""
            ) : (
              <span className="absolute left-[90px] top-[25px] transform -translate-y-1/2 text-red-500">
                *
              </span>
            )}
          </div>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="bg-transparent text-white px-6 py-4 rounded w-full border-2 text-xl border-white"
        >
          {submitting ? "Sending..." : "Send"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
