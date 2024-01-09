import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-10 text-center py-5 border-b-4 dark:border-sslate-950">
      <div className="my-auto">
        <Link className="font-bold" href={"/"}>
          GIANLUCA DONATO
        </Link>
      </div>
      <div>
        <ThemeSwitch />
      </div>
    </nav>
  );
}
