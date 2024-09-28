
import Link from "next/link.js";
import NavLink from "./NavLink.jsx";

function Navbar({ links }) {
  return (
    <div className="hidden lg:flex items-center gap-8 grow justify-center">
      {links.map((link) => {
        return (
          <Link key={link.id} href={link.href}>
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}

export default Navbar;