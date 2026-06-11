"use client";

import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash, TrashBin } from "@gravity-ui/icons";
import {
  Button,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { useState } from "react";
import { toast } from "react-toastify";

const WebNextAdminLogin = () => {
  const [isVisible, setIsVisible] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const adminData = Object.fromEntries(formData.entries());
    console.log("Admin Login Data:", adminData);

    const { data, error } = await authClient.signIn.email({
      email: adminData.email,
      password: adminData.password,
      rememberMe: false,
      callbackURL: "/web-next-admin",
    });
    if (data) {
      toast.success("Logged in successfully", {
        position: "top-center",
      });
      e.target.reset();
    } else {
      toast.error("Something went wrong", {
        position: "top-center",
      });
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-3">
      <div className="bg-white/20 border border-white/30 rounded-3xl py-8 sm:py-10 px-2 sm:px-10 w-full max-w-md flex flex-col items-center shadow-[0_0_10px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_10px_5px_rgba(255,255,255,0.3)] transition-all duration-300">
        <h1 className="text-3xl font-bold mb-6 text-yellow-400">Admin Login</h1>
        <Form
          onSubmit={onSubmit}
          className="flex min-w-full flex-col gap-4 bg-white/20 border border-white/30 rounded-3xl p-8"
        >
          {/* Email Field */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label className="text-white">Email</Label>
            <Input placeholder="Enter Admin Email" />
            <FieldError className="text-amber-300" />
          </TextField>

          {/* Password Field */}
          <TextField
            isRequired
            className="w-full"
            name="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters long";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[a-z]/.test(value)) {
                return "Password must contain at least one lowercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label className="text-white">Password</Label>
            <InputGroup>
              <InputGroup.Input
                className="w-full"
                type={isVisible ? "text" : "password"}
                placeholder="Enter Admin Password"
              />
              <InputGroup.Suffix className="pr-0">
                <Button
                  isIconOnly
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <Eye className="size-4" />
                  ) : (
                    <EyeSlash className="size-4" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>
            <FieldError className="text-amber-300 mt-1 block text-xs" />
          </TextField>

          {/* Submit and Reset Buttons */}
          <div className="flex gap-2">
            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full rounded-lg bg-green-700 font-bold"
            >
              <Check />
              Submit
            </Button>
            {/* Reset Button */}
            <Button
              type="reset"
              className="w-full rounded-lg bg-rose-400 text-white font-bold"
            >
              Clear <TrashBin />
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default WebNextAdminLogin;
