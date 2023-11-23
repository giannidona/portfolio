import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-around py-5 border-b-4 border-white">
      <div>
        <Link className="font-blold" href={"/"}>
          GIANLUCA DONATO
        </Link>
      </div>
      <div>
        <input className="rounded-lg" type="text" name="" id="" />
      </div>
      <div className="flex justify-around">
        <p>EN</p>
      </div>
      <div>
        <p>DARK</p>
      </div>
    </nav>
  );
}
