import Link from "next/link";

const NavLink = ({ href, children }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-blue-600 sm:text-xl rounded"
    >
      {children}
    </Link>
  );
};

export default NavLink;
