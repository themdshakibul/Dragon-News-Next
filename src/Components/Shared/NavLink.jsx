"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const usePathName = usePathname();
  const isActive = href === usePathName;

  return (
    <Link href={href} className={isActive ? "border-b-2 border-red-500" : ""}>
      {children}
    </Link>
  );
};

export default NavLink;
