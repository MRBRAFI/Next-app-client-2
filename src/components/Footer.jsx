"use client";

import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black py-10">
      <div className="w-11/12 mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side */}
        <div className="text-center md:text-left">
          <Link
            href={"/"}
            className="text-2xl font-black bg-white px-5 py-3 rounded text-purple-600"
          >
            CourseVerse
          </Link>
          <p className="text-xl text-gray-400 mt-5">
            Building modern web troops with our courses.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://www.facebook.com/m.r.b.rafi.2025"
            className="hover:text-white transition"
          >
            <FaFacebook className="text-2xl"></FaFacebook>
          </a>
          <a
            href="https://github.com/MRBRAFI"
            className="hover:text-white transition"
          >
            <FaGitAlt className="text-2xl"></FaGitAlt>
          </a>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-xs text-gray-500 mt-6 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} My App — All Rights Reserved.
      </div>
    </footer>
  );
}
