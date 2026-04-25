import Image from "next/image";
import Link from "next/link";
import avaterImage from "@/assets/user.png";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav>
      <div className="flex items-center justify-between mt-5">
        <div></div>
        <ul className="flex items-center gap-5 text-gray-700">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/about-us"}>About</NavLink>
          </li>
          <li>
            <NavLink href={"/career"}>Career</NavLink>
          </li>
        </ul>
        <div className="flex items-center justify-center gap-3 ">
          <Image src={avaterImage} alt="avaterImage" width={50} height={50} />
          <button className="btn bg-red-500 text-white">
            <Link href={"/login"}>Siging</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
