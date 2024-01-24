import Link from "next/link";

import { FaXTwitter } from "react-icons/fa6";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { IoLogoTwitch } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className="w-3/5 mx-auto px-10 py-5 border-b-2">
      <div className="flex justify-center">
        <a
          className="hover:text-gray-500"
          href="https://github.com/giannidona"
          target="_blank"
        >
          <FiGithub className="mx-3 text-2xl" />
        </a>
        <a
          className="hover:text-sky-600 "
          href="https://www.linkedin.com/in/gianidonato/"
          target="_blank"
        >
          <PiLinkedinLogoBold className="mx-3 text-2xl" />
        </a>
        <a
          className="hover:text-blue-500"
          href="https://twitter.com/giannidona_dev"
          target="_blank"
        >
          <FaXTwitter className="mx-3 text-2xl" />
        </a>
        <a
          className="hover:text-purple-600"
          href="https://www.twitch.tv/giannidona"
          target="_blank"
        >
          <IoLogoTwitch className="mx-3 text-2xl" />
        </a>
      </div>
    </nav>
  );
}
