import { FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-5 flex gap-x-5 justify-center">
      <Link href={"https://www.youtube.com/@giannidonaDev"} target="_blank">
        <FaYoutube />
      </Link>
      <Link href={"https://www.linkedin.com/in/gianidonato/"} target="_blank">
        <FaLinkedin />
      </Link>
      <Link href={"https://github.com/giannidona"} target="_blank">
        <IoLogoGithub />
      </Link>
      <Link href={"https://x.com/giannidona_dev"} target="_blank">
        <FaXTwitter />
      </Link>
    </footer>
  );
};
