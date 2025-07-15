"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems: NavigationMenuItem[] = [
  { title: "صفحه اصلی", href: "/" },
  { title: "دوره های ری اکت و نکست", href: "/courses" },
  { title: "مطالب و مقالات", href: "/blog" },
];

const TopNavigation = () => {
  const pathName = usePathname();
  return (
    <ul className="flex gap-x-8">
      {menuItems.map((item) => {
        return (
          <li key={`navigation-${item.href}`}>
            <Link
              className="hover:text-primary transition-colors pb-2"
              href={item.href}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default TopNavigation;
