"use client"
import { useEffect, useState } from "react";
import CartButton from "./CartButton.jsx";
import HamburgerButton from "./HamburgerButton.jsx";
import MobileNavbar from "./MobileNavbar.jsx";
import Navbar from "../components/NavBar.jsx";
import Image from "next/image";

const links = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Shop all",
    href: "/products",
  },
  {
    id: 3,
    name: "About Us",
    href: "/about",
  },
  {
    id: 4,
    name: "Contact Us",
    href: "/contact",
  },
];

export default function Header({children}) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <>
    {children}
    <header className="max-w-[1440px] mx-auto pt-7 pb-3 flex items-center gap-[103px] h-[84px] min-[1440px]:h-fit px-4 md:px-8 min-[1440px]:px-28">
    <Image
        src="/logo.svg"
        alt="Al Zehra Perfumes"
        width={60}
        height={60}
        draggable={false}
        className="select-none "
      />
      <Navbar links={links} />
      <div className="flex justify-center items-center gap-4 ml-auto">
        <CartButton />
        <HamburgerButton onClick={() => setIsMobileOpen(!isMobileOpen)} />
      </div>
      <MobileNavbar
        links={links}
        isMobileOpen={isMobileOpen}
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      />
    </header>
    </>
  );
}

// export default Header;