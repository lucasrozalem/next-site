import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
const LINKS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
];
type NavAnchor = {
  path: string;
  children: ReactNode;
};

function NavAnchor({ path, children }: NavAnchor) {
  return (
    <Link href={path}>
      {children}
    </Link>
  );
}

export default function Navigation() {
  const { pathname } = useRouter();
  return (
    <nav>
      <ul>
        {LINKS.map(({ name, path }) => (
          <li key={path}>
            {" "}
            {pathname === path ? (
              <span>{name}</span>
            ) : (
              <NavAnchor path={path}>{name}</NavAnchor>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
