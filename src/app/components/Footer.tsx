import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-gray-200 dark:border-gray-800  dark:bg-dark">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary">
              Goey&trade;
            </Link>
            <p className="text-sm text-secondary mt-2">
              {new Date().getFullYear()} goeyDev. All rights reserved.
            </p>
          </div>
          {/*  */}
          <div className="flex space-x-6 ">
            <Link
              href="/"
              className="text-2xl text-gray-500 hover:text-purple-300 dark:text-gray-300 transition-colors duration-400"
            >
              <FaGithub />
            </Link>
            <Link
              href="/"
              className="text-2xl text-gray-500 hover:text-purple-300 dark:text-gray-300 transition-colors duration-400"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="/"
              className="text-2xl text-gray-500 hover:text-purple-300 dark:text-gray-300 transition-colors duration-400"
            >
              <FaFacebook />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
