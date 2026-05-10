import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { HiOutlineHome } from "react-icons/hi";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-4 px-4">
      <h1 className="text-[120px] md:text-[180px] font-extrabold text-transparent bg-clip-text bg-linear-to-b from-white to-white/20 leading-none">
        404
      </h1>
      <h2 className="text-4xl font-semibold text-gray-100">
        Oops! Lost in Space?
      </h2>
      <p className="max-w-md text-center text-gray-300">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link href={"/"}>
        <Button className="bg-white/10 border border-white/30">
          <HiOutlineHome /> Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
