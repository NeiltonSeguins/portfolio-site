import { ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import NextLink from "next/link";

type LinkProps = {
  children: ReactNode;
  href?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: "a" | "router";
  };

const Link = ({ children, href, as = "a", ...props }: LinkProps) => {
  if (as === "router") {
    return (
      <NextLink
        href={href ?? "#"}
        {...props}
        className={buttonVariants({
          variant: "link",
          className: "display-block cursor-pointer",
        })}
      >
        {children}
      </NextLink>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonVariants({
        variant: "link",
        className: "cursor-pointer",
      })}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
