import { Link, useLocation } from "react-router-dom";

// Home page-এ সাধারণ #anchor (Lenis smooth scroll নেয়)। অন্য page-এ "/#id" এ ফিরে যায়।
export default function SectionLink({ id, children, ...props }) {
  const { pathname } = useLocation();
  if (pathname === "/") {
    return (
      <a href={`#${id}`} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link to={`/#${id}`} {...props}>
      {children}
    </Link>
  );
}
