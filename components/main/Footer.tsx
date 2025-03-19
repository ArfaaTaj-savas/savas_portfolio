"use client";

import React, { useState } from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "arfaataj009@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg p-5 relative z-10">
      {/* Centered Content */}
      <div className="w-full flex flex-col items-center justify-center">
        {/* Links Section */}
        <div className="w-full flex flex-row flex-wrap items-start justify-around gap-y-6">
          {/* Community Section */}
          <div className="min-w-[200px] flex flex-col items-center">
            <div className="font-bold text-lg mb-2">Community</div>

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer hover:text-blue-500"
            >
              <FaYoutube />
              <span className="ml-2">YouTube</span>
            </a>

            <a
              href="https://github.com/ArfaaTaj-savas"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer hover:text-blue-500"
            >
              <RxGithubLogo />
              <span className="ml-2">GitHub</span>
            </a>

            <a
              href="https://discordapp.com/users/1008148816282787941"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer hover:text-blue-500"
            >
              <RxDiscordLogo />
              <span className="ml-2">Discord</span>
            </a>
          </div>

          {/* Social Media Section */}
          <div className="min-w-[200px] flex flex-col items-center">
            <div className="font-bold text-lg mb-2">Social Media</div>

            <a
              href="https://www.instagram.com/savas__090/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer hover:text-blue-500"
            >
              <RxInstagramLogo />
              <span className="ml-2">Instagram</span>
            </a>

            <a
              href="https://x.com/ArfaaTaj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer hover:text-blue-500"
            >
              <RxTwitterLogo />
              <span className="ml-2">Twitter</span>
            </a>

            <a
              href="https://www.linkedin.com/in/md-arfaa-taj-6b4089256/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center my-2 cursor-pointer hover:text-blue-500"
            >
              <RxLinkedinLogo />
              <span className="ml-2">LinkedIn</span>
            </a>
          </div>

          {/* Copy Email Section */}
          <div className="min-w-[200px] flex flex-col items-center">
            <div className="font-bold text-lg mb-2">Contact</div>
            <p>You can contact me by</p>
            <p>copying my email by pressing</p>
            <p>the copy button below.</p>
            <p>_</p>
            <button
              onClick={handleCopy}
              className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition-all"
            >
              <MdContentCopy className="mr-2" />
              {copied ? "Copied!" : "Copy my email address"}
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm">
          &copy; SAVAS 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
