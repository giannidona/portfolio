import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="py-5">
      <Link
        className="mr-6 text-stone-400 font-semibold antialiased hover:text-white transition duration-200 ease-in-out"
        href={"/"}
      >
        Home
      </Link>
      <Link
        className="mr-6 text-stone-400 font-semibold antialiased hover:text-white transition duration-200 ease-in-out"
        href={"/about"}
      >
        About
      </Link>
      <Link
        className="mr-6 text-stone-400 font-semibold antialiased hover:text-white transition duration-200 ease-in-out"
        href={"/projects"}
      >
        Projects
      </Link>
    </nav>
  );
};
