"use client";
import Link from "next/link";
import { useState } from "react";
import { BsShare } from "react-icons/bs";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { IoChevronDownSharp } from "react-icons/io5";

interface FAQ {
  id: number;
  question: string;
  answer: string | JSX.Element;
}

interface ProductDataDesc {
  product_small_description?: string;
  product_big_description?: string;
  shipping_and_return?: string;
}

const FAQs: React.FC<ProductDataDesc> = ({
  product_small_description,
  product_big_description,
  shipping_and_return,
}) => {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleExpanded = (id: number) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const defaultContent = "Information not available at the moment.";

  const faqData: FAQ[] = [
    {
      id: 1,
      question: "Details",
      answer: (
        <div>
          {product_big_description ? (
            <div
              dangerouslySetInnerHTML={{ __html: product_big_description }}
            />
          ) : (
            <p>{defaultContent}</p>
          )}
        </div>
      ),
    },
    {
      id: 2,
      question: "Size & Fit",
      answer: (
        <div>
          {product_small_description ? (
            <div
              dangerouslySetInnerHTML={{ __html: product_small_description }}
            />
          ) : (
            <p>{defaultContent}</p>
          )}
        </div>
      ),
    },
    {
      id: 3,
      question: "Shipping & Return",
      answer:
        shipping_and_return || "Shipping and return information not available.",
    },
    {
      id: 4,
      question: "Share",
      answer: (
        <div className="flex gap-10 mt-4 items-center justify-center">
          <div className="w-10 h-10 bg-[#fafafa] flex justify-center items-center rounded-full">
            <Link href="#" aria-label="Share on Facebook">
              <FaFacebookF className="text-black" size={20} />
            </Link>
          </div>
          <div className="w-10 h-10 bg-[#fafafa] flex justify-center items-center rounded-full">
            <Link href="#" aria-label="Share on Instagram">
              <GrInstagram className="text-black" size={18} />
            </Link>
          </div>
          <div className="w-10 h-10 bg-[#fafafa] flex justify-center items-center rounded-full">
            <Link href="#" aria-label="Share on Twitter">
              <FaXTwitter className="text-black" size={18} />
            </Link>
          </div>
          <div className="w-10 h-10 bg-[#fafafa] flex justify-center items-center rounded-full">
            <Link href="#" aria-label="Share on Pinterest">
              <FaPinterestP className="text-black" size={18} />
            </Link>
          </div>
          <div className="w-10 h-10 bg-[#fafafa] flex justify-center items-center rounded-full">
            <Link href="#" aria-label="Share">
              <BsShare className="text-black" size={18} />
            </Link>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative md:mt-5 mt-3">
      <main className="relative h-auto py-3 flex flex-col justify-center overflow-hidden">
        <div className="w-full max-w-2xl mx-auto px-2 md:px-2">
          {/* Accordion component */}
          <div className="divide-y divide-slate-200">
            {faqData.map(({ id, question, answer }) => (
              <div key={id} className="py-2">
                <h2>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full text-left font-semibold py-2"
                    onClick={() => toggleExpanded(id)}
                    aria-expanded={expanded[id] ? "true" : "false"}
                    aria-controls={`faqs-text-${id}`}
                  >
                    <span className="uppercase">{question}</span>
                    <IoChevronDownSharp
                      className={`transition-transform transform ${
                        expanded[id] ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h2>
                <div
                  id={`faqs-text-${id}`}
                  role="region"
                  aria-labelledby={`faqs-title-${id}`}
                  className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${
                    expanded[id]
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <span className="pb-3">{answer}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* End: Accordion component */}
        </div>
      </main>
    </div>
  );
};

export default FAQs;
