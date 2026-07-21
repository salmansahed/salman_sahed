"use client";

import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import { toast } from "react-toastify";
import { IoIosCall } from "react-icons/io";
import { FaFacebook, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import Link from "next/link";
import { BsChatRightText } from "react-icons/bs";

const Contacts = () => {
  const [value, setValue] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const contactData = Object.fromEntries(formData.entries());

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/contact-form`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      },
    );

    const data = await res.json();
    if (data.insertedId) {
      toast.success("Message sent successfully! We'll get back to you soon.", {
        position: "top-center",
      });
      e.target.reset();
      setValue("");
    }
  };

  return (
    <div
      className="max-w-6xl mx-auto px-3 py-10 sm:py-18 scroll-mt-8"
      id="contacts"
    >
      {/* Section Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-gray-100 transition-colors">
          Let’s Build Something Together
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-2xl transition-colors">
          Contact Me
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-10 sm:gap-12">
        {/* Contact Form Section */}
        <div className="bg-black/5 border border-black/10 dark:bg-white/10 dark:border-white/20 rounded-3xl p-10 w-full shadow-[0_0_10px_1px_rgba(0,0,0,0.05)] hover:shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] dark:hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-all duration-300">
          <h2 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-gray-100 transition-colors">
            Send Me A Message
          </h2>
          <Form className="w-full" onSubmit={onSubmit}>
            <Fieldset>
              <FieldGroup>
                {/* Name */}
                <TextField
                  isRequired
                  name="name"
                  validate={(value) => {
                    if (value.length < 3) {
                      return "Name must be at least 3 characters";
                    }
                    return null;
                  }}
                >
                  <Label className="text-gray-700 dark:text-gray-200 transition-colors">
                    Name
                  </Label>
                  <Input
                    placeholder="Enter your name"
                    className="bg-black/5 border border-black/20 text-gray-900 placeholder:text-gray-500 dark:bg-white/10 dark:border-white/30 dark:text-gray-100 dark:placeholder:text-gray-400 transition-colors"
                  />
                  <FieldError className="text-red-500" />
                </TextField>

                {/* Email */}
                <TextField isRequired name="email" type="email">
                  <Label className="text-gray-700 dark:text-gray-200 transition-colors">
                    Email
                  </Label>
                  <Input
                    placeholder="Enter your email address"
                    className="bg-black/5 border border-black/20 text-gray-900 placeholder:text-gray-500 dark:bg-white/10 dark:border-white/30 dark:text-gray-100 dark:placeholder:text-gray-400 transition-colors"
                  />
                  <FieldError className="text-red-500" />
                </TextField>

                {/* Phone */}
                <TextField>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors">
                    Phone (Optional)
                  </label>
                  <PhoneInput
                    name="phone"
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                    className="bg-black/5 border border-black/20 text-gray-900 dark:bg-white/10 dark:border-white/30 dark:text-gray-100 px-3 py-2.5 rounded-xl transition-colors [&_input]:bg-transparent [&_input]:outline-none"
                    countrySelectProps={{
                      style: {
                        backgroundColor: "#161b22",
                        color: "#ffffff",
                      },
                    }}
                  />
                </TextField>

                {/* Message */}
                <TextField
                  isRequired
                  name="message"
                  validate={(value) => {
                    if (value.length < 20) {
                      return "Message must be at least 20 characters";
                    }
                    return null;
                  }}
                >
                  <Label className="text-gray-700 dark:text-gray-200 transition-colors">
                    Message
                  </Label>
                  <TextArea
                    placeholder="Write your message"
                    className="bg-black/5 border border-black/20 text-gray-900 placeholder:text-gray-500 dark:bg-white/10 dark:border-white/30 dark:text-gray-100 dark:placeholder:text-gray-400 h-40 transition-colors"
                  />
                  <Description className="text-gray-500 dark:text-gray-400 text-xs">
                    Minimum 20 characters
                  </Description>
                  <FieldError className="text-red-500" />
                </TextField>
              </FieldGroup>

              <Fieldset.Actions className="mt-4">
                <Button
                  type="submit"
                  className="w-full cursor-pointer bg-black/5 border border-black/20 text-gray-900 hover:bg-black/10 dark:bg-white/10 dark:border-white/30 dark:text-gray-100 shadow-sm dark:shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] dark:hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-all duration-300 group flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <BsChatRightText className="group-hover:scale-110 transition-all delay-100 group-hover:text-yellow-500 dark:group-hover:text-yellow-400" />
                </Button>
              </Fieldset.Actions>
            </Fieldset>
          </Form>
        </div>

        {/* Direct Contact & Links Section */}
        <div className="w-full bg-black/5 border border-black/10 dark:bg-white/10 dark:border-white/20 rounded-3xl p-10 shadow-[0_0_10px_1px_rgba(0,0,0,0.05)] hover:shadow-[0_0_10px_5px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] dark:hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-all duration-300">
          <h2 className="text-gray-900 dark:text-gray-100 text-xl font-semibold transition-colors">
            Chat With Me
          </h2>
          <p className="text-gray-600 dark:text-gray-300 font-medium text-sm transition-colors">
            Let&apos;s discuss your next project or technical needs.
          </p>

          <div className="space-y-4 mt-6">
            <Link
              target="_blank"
              href={"https://wa.me/8801614869602"}
              className="flex items-center gap-2 underline underline-offset-4 text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-all"
            >
              <FaWhatsapp className="text-2xl text-green-600 dark:text-green-400" />{" "}
              Start a WhatsApp chat
            </Link>
            <Link
              target="_blank"
              href={"mailto:salmansahed10@gmail.com"}
              className="flex items-center gap-2 underline underline-offset-4 text-gray-800 dark:text-gray-200 hover:text-yellow-600 dark:hover:text-yellow-400 transition-all"
            >
              <MdOutlineEmail className="text-2xl text-yellow-600 dark:text-yellow-400" />{" "}
              Shoot me an email
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/salman-sahed/"}
              className="flex items-center gap-2 underline underline-offset-4 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
            >
              <AiOutlineLinkedin className="text-2xl text-blue-600 dark:text-blue-400" />{" "}
              Connect on LinkedIn
            </Link>
            <Link
              target="_blank"
              href={"https://www.facebook.com/salmansahedbd"}
              className="flex items-center gap-2 underline underline-offset-4 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
            >
              <FaFacebook className="text-2xl text-blue-600 dark:text-blue-500" />{" "}
              Connect on Facebook
            </Link>
          </div>

          <div className="mt-8">
            <h2 className="text-gray-900 dark:text-gray-100 text-xl font-semibold transition-colors">
              Call Me
            </h2>
            <p className="text-gray-600 dark:text-gray-300 font-medium text-sm transition-colors">
              Available for urgent queries or consultations.
            </p>
            <div className="mt-4">
              <Link
                href={`tel:${process.env.PHONE_NUMBER}`}
                className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-white/70 transition-all"
              >
                <IoIosCall className="text-2xl text-gray-700 dark:text-gray-300" />{" "}
                Numbers: +880161*****02
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-gray-900 dark:text-gray-100 text-xl font-semibold transition-colors">
              Check my projects on GitHub
            </h2>
            <div className="mt-4">
              <Link
                target="_blank"
                href={"https://github.com/salmansahed"}
                className="inline-block"
              >
                <FaGithub className="text-3xl text-gray-800 dark:text-gray-100 hover:text-red-500 dark:hover:text-red-400 transition-all" />
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-gray-900 dark:text-gray-100 text-xl font-semibold transition-colors">
              Specialized in MERN Stack & Next.js
            </h2>
            <p className="text-gray-600 dark:text-gray-300 font-medium text-sm transition-colors">
              Building high-performance web applications and hardware solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
