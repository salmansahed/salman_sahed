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
      <div className="text-center mb-14">
        <h1 className="text-4xl font-semibold text-gray-100">Get in Touch</h1>
        <p className="text-gray-300 text-lg">Contact Me</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-10 sm:gap-12">
        <div className="bg-white/10 border border-white/20 rounded-3xl p-10 w-full shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)]">
          <h2 className="text-xl font-semibold mb-4 text-center">
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
                  <Label className="text-gray-200">Name</Label>
                  <Input
                    placeholder="Enter your name"
                    className="bg-white/10 border border-white/30 text-gray-100"
                  />
                  <FieldError />
                </TextField>

                {/* Email */}
                <TextField isRequired name="email" type="email">
                  <Label className="text-gray-200">Email</Label>
                  <Input
                    placeholder="Enter your email address"
                    className="bg-white/10 border border-white/30 text-gray-100"
                  />
                  <FieldError />
                </TextField>

                {/* Phone */}
                <TextField>
                  <label className="text-sm">Phone (Optional)</label>
                  <PhoneInput
                    name="phone"
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue}
                    className="bg-white/10 px-2 py-3 rounded-xl border border-white/30"
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
                  <Label className="text-gray-200">Message</Label>
                  <TextArea
                    placeholder="Write your message"
                    className="bg-white/10 border border-white/30 h-40 text-gray-100"
                  />
                  <Description>Minimum 20 characters</Description>
                  <FieldError />
                </TextField>
              </FieldGroup>
              <Fieldset.Actions>
                <Button
                  type="submit"
                  className="w-full bg-white/10 border border-white/30 text-gray-100 shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-all duration-300"
                >
                  Send Message
                </Button>
              </Fieldset.Actions>
            </Fieldset>
          </Form>
        </div>
        <div className="w-full bg-white/10 rounded-3xl border border-white/20 p-10 shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)]">
          <h2 className="text-gray-100 text-xl font-semibold">Chat With Me</h2>
          <p className="text-gray-300 font-medium text-sm">
            Let&apos;s discuss your next project or technical needs.
          </p>
          <div className="space-y-4 mt-6">
            <Link
              target="_blank"
              href={"https://wa.me/8801614869602"}
              className="flex items-center gap-2 underline underline-offset-4 text-gray-200 hover:text-green-400 transition-all"
            >
              <FaWhatsapp className="text-2xl" /> Start a WhatsApp chat
            </Link>
            <Link
              target="_blank"
              href={"mailto:salmansahed10@gmail.com"}
              className="flex items-center gap-2 underline underline-offset-4 text-gray-200 hover:text-yellow-400 transition-all"
            >
              <MdOutlineEmail className="text-2xl" /> Shoot me an email
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/salman-sahed/"}
              className="flex items-center gap-2 underline underline-offset-4 text-gray-200 hover:text-blue-400 transition-all"
            >
              <AiOutlineLinkedin className="text-2xl" /> Connect on LinkedIn
            </Link>
            <Link
              target="_blank"
              href={"https://www.facebook.com/salmansahedbd"}
              className="flex items-center gap-2 underline underline-offset-4 text-gray-200 hover:text-blue-400 transition-all"
            >
              <FaFacebook className="text-2xl" /> Connect on Facebook
            </Link>
          </div>
          <div className="mt-8">
            <h2 className="text-gray-100 text-xl font-semibold">Call Me</h2>
            <p className="text-gray-300 font-medium text-sm">
              Available for urgent queries or consultations.
            </p>
            <div className="mt-4">
              <Link
                href={"tel:+8801614869602"}
                className="flex items-center gap-2 text-gray-200 hover:text-white/50 transition-all"
              >
                <IoIosCall className="text-2xl" /> Numbers: +8801614869602
              </Link>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-gray-100 text-xl font-semibold">
              Check my projects on GitHub
            </h2>
            <div className="mt-4">
              <Link
                target="_blank"
                href={"https://github.com/salmansahed"}
                className="inline-block"
              >
                <FaGithub className="text-3xl hover:text-red-400 transition-all" />
              </Link>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-gray-100 text-xl font-semibold">
              Specialized in MERN Stack & Next.js
            </h2>
            <p className="text-gray-300 font-medium text-sm">
              Building high-performance web applications and hardware solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
