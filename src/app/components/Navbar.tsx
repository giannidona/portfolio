import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="text-center py-5 border-b-4 border-white">
      <div>
        <Link className="font-blold" href={"/"}>
          GIANLUCA DONATO
        </Link>
      </div>
    </nav>
  );
}
