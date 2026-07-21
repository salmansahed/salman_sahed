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
import Link from "next/link";
import { useState } from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsSend } from "react-icons/bs";
import { FaFacebook, FaGithub, FaWhatsapp } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { IoIosCall } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { toast } from "react-toastify";

const Contacts = () => {
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
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
      if (data.insertedId || data.acknowledged) {
        toast.success("Message sent successfully! I'll get back to you soon.", {
          position: "top-center",
        });
        e.target.reset();
        setValue("");
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please check your network.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative max-w-6xl mx-auto py-16 sm:py-24 px-4 sm:px-6 scroll-mt-20 overflow-hidden"
      id="contacts"
    >
      {/* 1. Ambient Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/15 dark:bg-blue-500/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/15 dark:bg-purple-500/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse delay-700" />

      {/* 2. Cyber Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/15 text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-3">
          <HiSparkles className="text-amber-500 animate-spin" />
          <span>LET&apos;S CONNECT</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
          Let’s Build Something{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-purple-600 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
            Together
          </span>
        </h2>
        <p className="text-sm sm:text-base text-slate-600 dark:text-gray-400 mt-2 max-w-md">
          Have a project in mind or want to collaborate? Reach out to me!
        </p>
      </div>

      {/* 3. Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Form Box (Left) */}
        <div className="lg:col-span-7 rounded-3xl bg-white/60 dark:bg-white/3 border border-black/7 dark:border-white/10 p-6 sm:p-10 shadow-xl backdrop-blur-2xl">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Send Me A Message
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 mb-6">
            Fill out the form below and I&apos;ll respond as soon as possible.
          </p>

          <Form className="w-full space-y-4" onSubmit={onSubmit}>
            <Fieldset className="space-y-4">
              <FieldGroup className="space-y-4">
                {/* Name */}
                <TextField
                  isRequired
                  name="name"
                  validate={(val) => {
                    if (val.length < 3) {
                      return "Name must be at least 3 characters";
                    }
                    return null;
                  }}
                  className="flex flex-col gap-1.5"
                >
                  <Label className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Your Name
                  </Label>
                  <Input
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-100/80 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-xs sm:text-sm transition-all"
                  />
                  <FieldError className="text-xs text-red-500 font-medium" />
                </TextField>

                {/* Email */}
                <TextField
                  isRequired
                  name="email"
                  type="email"
                  className="flex flex-col gap-1.5"
                >
                  <Label className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Email Address
                  </Label>
                  <Input
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-100/80 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-xs sm:text-sm transition-all"
                  />
                  <FieldError className="text-xs text-red-500 font-medium" />
                </TextField>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Phone (Optional)
                  </label>
                  <div className="rounded-2xl bg-slate-100/80 dark:bg-white/5 border border-black/10 dark:border-white/10 p-2 text-slate-900 dark:text-white transition-all">
                    <PhoneInput
                      name="phone"
                      placeholder="Enter phone number"
                      value={value}
                      onChange={setValue}
                      className="text-xs sm:text-sm text-slate-900 dark:text-white [&_input]:bg-transparent [&_input]:outline-none [&_input]:text-slate-900 dark:[&_input]:text-white [&_.PhoneInputCountrySelect]:bg-slate-800 [&_.PhoneInputCountrySelect]:text-white"
                      countrySelectProps={{
                        className: "bg-slate-800 text-white rounded-lg p-1",
                      }}
                    />
                  </div>
                </div>

                {/* Message */}
                <TextField
                  isRequired
                  name="message"
                  validate={(val) => {
                    if (val.length < 20) {
                      return "Message must be at least 20 characters";
                    }
                    return null;
                  }}
                  className="flex flex-col gap-1.5"
                >
                  <Label className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    Your Message
                  </Label>
                  <TextArea
                    placeholder="Write your project details or inquiries here..."
                    className="w-full px-4 py-3 rounded-2xl bg-slate-100/80 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 text-xs sm:text-sm min-h-36 transition-all"
                  />
                  <Description className="text-slate-500 dark:text-gray-400 text-[11px]">
                    Minimum 20 characters required
                  </Description>
                  <FieldError className="text-xs text-red-500 font-medium" />
                </TextField>
              </FieldGroup>

              <Fieldset.Actions className="mt-6">
                <Button
                  type="submit"
                  isDisabled={loading}
                  className="w-full cursor-pointer flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:to-pink-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50"
                >
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                  <BsSend className="text-base group-hover:translate-x-1 transition-transform" />
                </Button>
              </Fieldset.Actions>
            </Fieldset>
          </Form>
        </div>

        {/* Direct Contact & Social Links Box (Right) */}
        <div className="lg:col-span-5 rounded-3xl bg-white/60 dark:bg-white/3 border border-black/7 dark:border-white/10 p-6 sm:p-10 shadow-xl backdrop-blur-2xl space-y-8">
          {/* Quick Chat Section */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
              Chat With Me
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 mb-4">
              Let&apos;s discuss your next project or technical needs.
            </p>

            <div className="space-y-3">
              {/* WhatsApp Tile */}
              <Link
                target="_blank"
                href="https://wa.me/8801614869602"
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-100/80 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:bg-emerald-500/10 hover:border-emerald-500/30 text-slate-800 dark:text-slate-200 transition-all group"
              >
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                  <FaWhatsapp size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    WhatsApp
                  </span>
                  <span className="text-xs text-slate-500 dark:text-gray-400">
                    Start an instant chat
                  </span>
                </div>
              </Link>

              {/* Email Tile */}
              <Link
                target="_blank"
                href="mailto:salmansahed10@gmail.com"
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-100/80 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:bg-amber-500/10 hover:border-amber-500/30 text-slate-800 dark:text-slate-200 transition-all group"
              >
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                  <MdOutlineEmail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    Email
                  </span>
                  <span className="text-xs text-slate-500 dark:text-gray-400">
                    salmansahed10@gmail.com
                  </span>
                </div>
              </Link>

              {/* LinkedIn Tile */}
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/salman-sahed/"
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-100/80 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:bg-blue-500/10 hover:border-blue-500/30 text-slate-800 dark:text-slate-200 transition-all group"
              >
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <AiOutlineLinkedin size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    LinkedIn
                  </span>
                  <span className="text-xs text-slate-500 dark:text-gray-400">
                    Connect professionally
                  </span>
                </div>
              </Link>

              {/* Facebook Tile */}
              <Link
                target="_blank"
                href="https://www.facebook.com/salmansahedbd"
                className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-100/80 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:bg-blue-600/10 hover:border-blue-600/30 text-slate-800 dark:text-slate-200 transition-all group"
              >
                <div className="p-2 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-500 group-hover:scale-110 transition-transform">
                  <FaFacebook size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    Facebook
                  </span>
                  <span className="text-xs text-slate-500 dark:text-gray-400">
                    Follow on Facebook
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <hr className="border-black/5 dark:border-white/10" />

          {/* Call & GitHub Section */}
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                Direct Call
              </h4>
              <Link
                href={`tel:${process.env.PHONE_NUMBER}`}
                className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <IoIosCall className="text-lg text-blue-600 dark:text-blue-400" />
                <span>+8801614869602</span>
              </Link>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                GitHub Portfolio
              </h4>
              <Link
                target="_blank"
                href="https://github.com/salmansahed"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100/80 dark:bg-white/5 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-xs font-semibold transition-all"
              >
                <FaGithub size={16} />
                <span>@salmansahed</span>
              </Link>
            </div>
          </div>

          <hr className="border-black/5 dark:border-white/10" />

          {/* Specialization Highlight Badge */}
          <div className="p-4 rounded-2xl bg-linear-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
            <h4 className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-1">
              MERN Stack & Next.js Specialist
            </h4>
            <p className="text-[11px] text-slate-600 dark:text-gray-400 leading-relaxed">
              Available for full-time roles, freelance projects, and custom web
              application engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
