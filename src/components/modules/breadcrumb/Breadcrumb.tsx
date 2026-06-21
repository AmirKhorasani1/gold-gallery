import React from "react";
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi";

interface BreadcrumbLink {
  id: string | number;
  title: string;
  to: string;
}

interface BreadcrumbProps {
  links: BreadcrumbLink[];
}

const Breadcrumb = ({ links }: BreadcrumbProps) => {
  return (
    <div className="">
      <ul className="flex items-center gap-1.5">
        {links.map((link, index) => (
          <li
            key={link.id}
            className="flex text-[13px] text-neutral-500 hover:text-[#10494b] font-semibold items-center gap-1.5"
          >
            <Link href={link.to}>{link.title}</Link>

            {index < links.length - 1 && (
              <span className="text-neutral-400">
                <HiChevronLeft size={18} />
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;