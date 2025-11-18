import React from "react";

const NavLink = ({ text, href }) => {
  return (
    <li>
      <a href={href} className="hover:text-accent transition">
        {text}
      </a>
    </li>
  );
};

export default NavLink;
