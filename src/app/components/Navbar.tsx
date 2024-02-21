import ThemeSwitch from "./ThemeSwitch";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { IoLogoTwitch } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="w-full md:w-3/5 xl:w-2/5 mx-auto px-10 py-5 border-b-2 border-b-black dark:border-b-white">
      <div className="flex gap-10 justify-center">
        <div className="flex">
          <a
            className="hover:text-gray-500 my-auto"
            href="https://github.com/giannidona"
            target="_blank"
          >
            <FiGithub className="mx-3 text-2xl" />
          </a>
          <a
            className="hover:text-sky-600 my-auto"
            href="https://www.linkedin.com/in/gianidonato/"
            target="_blank"
          >
            <PiLinkedinLogoBold className="mx-3 text-2xl" />
          </a>
          <a
            className="hover:text-purple-600 my-auto"
            href="https://www.twitch.tv/giannidona"
            target="_blank"
          >
            <IoLogoTwitch className="mx-3 text-2xl" />
          </a>
          <a
            className="hover:text-black my-auto"
            href="https://twitter.com/giannidona_dev"
            target="_blank"
          >
            <FaXTwitter className="mx-3 text-2xl" />
          </a>
        </div>
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
