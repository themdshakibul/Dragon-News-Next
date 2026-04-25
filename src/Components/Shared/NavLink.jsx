"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const usePathName = usePathname();
  const isActive = href === usePathName;

  return (
    <Link href={href} className={isActive ? "btn bg-red-500 text-white" : ""}>
      {children}
    </Link>
  );
};

export default NavLink;
