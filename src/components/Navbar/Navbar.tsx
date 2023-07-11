import Link from "next/link";
import Image from "next/image";
import { Url } from "next/dist/shared/lib/router/router";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import { cn } from "@/lib/styles";

type NavbarProps = React.HTMLAttributes<HTMLElement>;

const Navbar = ({ className, children, ...props }: NavbarProps) => {
  return (
    <nav className={cn("my-10 flex justify-between", className)} {...props}>
      {children}
    </nav>
  );
};

type NavbarLogoProps = {
  href?: Url;
  className?: string;
  src: string | StaticImport;
  alt: string;
};

const NavbarLogo = ({ href = "/", className, src, alt }: NavbarLogoProps) => {
  return (
    <Link href={href} className={cn("w-[147px] h-11 relative", className)}>
      <Image fill src={src} alt={alt} />
    </Link>
  );
};

Navbar.Logo = NavbarLogo;

export { Navbar };
