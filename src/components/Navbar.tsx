import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="mb-6 flex gap-4 border-b border-neutral-200 pb-3 text-sm">
      <Link
        href="/"
        className="text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline"
      >
        home
      </Link>
      <Link
        href="/gallery"
        className="text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline"
      >
        gallery
      </Link>
    </nav>
  );
};
