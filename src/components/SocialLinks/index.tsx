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

const socialLinksData: SocialLinkItem[] = [
  {
    href: "https://www.instagram.com/neilton_seguins/",
    label: "Instagram de Neilton Seguins",
    icon: InstagramLogoIcon,
  },
  {
    href: "https://github.com/NeiltonSeguins",
    label: "GitHub de Neilton Seguins",
    icon: GitHubLogoIcon,
  },
  {
    href: "https://www.linkedin.com/in/ne%C3%ADlton-seguins/",
    label: "LinkedIn de Neilton Seguins",
    icon: LinkedInLogoIcon,
  },
];

const SocialLinks = () => {
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
