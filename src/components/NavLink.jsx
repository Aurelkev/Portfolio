import React from "react";
import { Link } from "react-router-dom";


export default function NavLink({ text, href, to }) {
  return to ? (
    <Link
      to={to}
      className="hover:text-accent transition cursor-pointer"
    >
      {text}
    </Link>
  ) : (
    <a href={href} className="hover:text-accent transition">
      {text}
    </a>
  );
}