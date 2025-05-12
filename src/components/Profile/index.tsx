import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  InstagramLogoIcon,
} from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "../Link";

const Profile = () => {
  return (
    <section className="pb-12">
      <Avatar className="w-24 h-24">
        <AvatarImage
          src="https://github.com/NeiltonSeguins.png"
          alt="Neilton Seguins"
        />
        <AvatarFallback>NS</AvatarFallback>
      </Avatar>
      <h1 className="text-4xl font-bold leading-tight">
        Software Developer, <br />
        Tech Educator e Otaku.
      </h1>
      <p className="mt-4 mb-4 max-w-2xl">
        Eu me chamo Neilton Seguins, otaku não praticante, desenvolvedor, gamer
        e contrabaixista. Sou Desenvolvedor de software, Instrutor de cursos de
        programação e escrevo sobre a vida, universo e tudo mais no Dev.to
      </p>
      <div className="flex gap-8 mt-2">
        <Link
          href="https://www.instagram.com/neilton_seguins/"
          target="_blank"
          rel="noopener noreferrer"
          className="no-horizontal-padding"
        >
          <InstagramLogoIcon />
        </Link>
        <Link
          href="https://github.com/NeiltonSeguins"
          target="_blank"
          rel="noopener noreferrer"
          className="no-horizontal-padding"
        >
          <GitHubLogoIcon />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ne%C3%ADlton-seguins/"
          target="_blank"
          rel="noopener noreferrer"
          className="no-horizontal-padding"
        >
          <LinkedInLogoIcon />
        </Link>
      </div>
    </section>
  );
};

export default Profile;
