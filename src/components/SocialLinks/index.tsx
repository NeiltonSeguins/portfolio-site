import { IconProps } from "@radix-ui/react-icons/dist/types";
import Link from "../Link";
import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

interface SocialLinkItem {
  href: string;
  label: string;
  icon: React.FC<IconProps>;
}

import { useTranslations } from "next-intl";

const SocialLinks = () => {
  const t = useTranslations("SocialLinks");

  const socialLinksData: SocialLinkItem[] = [
    {
      href: "https://www.instagram.com/neilton_seguins/",
      label: t("instagram"),
      icon: InstagramLogoIcon,
    },
    {
      href: "https://github.com/NeiltonSeguins",
      label: t("github"),
      icon: GitHubLogoIcon,
    },
    {
      href: "https://www.linkedin.com/in/ne%C3%ADlton-seguins/",
      label: t("linkedin"),
      icon: LinkedInLogoIcon,
    },
  ];
  return (
    <div className="flex gap-8 mt-2">
      {socialLinksData.map((socialLink) => (
        <Link
          key={socialLink.href}
          href={socialLink.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={socialLink.label}
          className="no-horizontal-padding"
        >
          <socialLink.icon className="w-6 h-6" />
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
