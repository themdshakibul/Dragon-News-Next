"use client";

import { ArrowRightFromSquare, Gear, Persons } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
// import Image from "next/image";
// import avaterImage from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(user, isPending);

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

        {isPending ? (
          <span className="loading loading-dots loading-xl"></span>
        ) : user ? (
          <Dropdown>
            <Dropdown.Trigger className="rounded-full">
              <Avatar size="lg">
                <Avatar.Image alt={user.name} src={user.image} />
                <Avatar.Fallback delayMs={600}>{user.name}</Avatar.Fallback>
              </Avatar>
            </Dropdown.Trigger>
            <Dropdown.Popover>
              <div className="px-3 pt-3 pb-1">
                <div className="flex items-center gap-2">
                  <Avatar size="sm">
                    <Avatar.Image alt="Jane" src={user.image} />
                    <Avatar.Fallback delayMs={600}>
                      {user.image}
                    </Avatar.Fallback>
                  </Avatar>
                  <div className="flex flex-col gap-0">
                    <p className="text-sm leading-5 font-medium">{user.name}</p>
                    <p className="text-xs leading-none text-muted">
                      {user.email}
                    </p>
                  </div>
                </div>
              </div>
              <Dropdown.Menu>
                <Dropdown.Item id="dashboard" textValue="Dashboard">
                  <Label>Dashboard</Label>
                </Dropdown.Item>
                <Dropdown.Item id="profile" textValue="Profile">
                  <Label>Profile</Label>
                </Dropdown.Item>
                <Dropdown.Item
                  id="logout"
                  textValue="Logout"
                  variant="danger"
                  onClick={async () => await authClient.signOut()}
                >
                  <div className="flex w-full items-center justify-between gap-2">
                    <Label>Log Out</Label>
                    <ArrowRightFromSquare className="size-3.5 text-danger" />
                  </div>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>
        ) : (
          <button className="btn bg-red-500 text-white">
            <Link href={"/loging"}>Loging</Link>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
