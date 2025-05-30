import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "../Link";
import SocialLinks from "../SocialLinks";

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
        programação e escrevo sobre a vida, universo e tudo mais no{" "}
        <Link as="a" href="https://dev.to/neiltonseguins">
          Dev.to
        </Link>
      </p>
      <SocialLinks />
    </section>
  );
};

export default Profile;
