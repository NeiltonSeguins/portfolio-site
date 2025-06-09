import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  GitHubLogoIcon,
  EnvelopeOpenIcon,
} from "@radix-ui/react-icons";
import Image, { StaticImageData } from "next/image";
import profilePic from "./profile-pic.jpg";
import { LinkItemData } from "@/@types/schema";
import AboutLinkItem from "./AboutLinkItem";
interface AboutPageData {
  name: string;
  description: string[];
  image: StaticImageData;
  links: LinkItemData[];
}

const aboutData = {
  name: "Neilton",
  description: [
    "Nascido em São Luís, MA, sou formado em Bacharelado em Ciência e Tecnologia e em Engenharia Mecânica. Em 2021, decidi mudar de área e comecei minha jornada na programação, combinando minha curiosidade técnica com a paixão por aprender.",
    "Já atuei como instrutor durante 03 anos e hoje sou desenvolvedor de software na Alura, trabalhando com tecnologias como JavaScript/TypeScript, React, Next.js, Angular, React Native e Node.js. Tenho experiência em desenvolver aplicações front-end e back-end, além de gostar de testes de software.",
    "Sou também criador de conteúdo nas plataformas Dev.to e Medium, onde compartilho meu aprendizado, e participo do programa Google Developers. Tenho estudado intensamente a aplicação de Inteligência Artificial no desenvolvimento e gosto de colaborar em projetos open source. Participar do Hacktoberfest todos os anos é uma das minhas tradições favoritas!",
    "Quando não estou codando, gosto de escutar música, jogar videogames, assistir animes, filmes e séries, ou tocar meu contrabaixo. Afinal, a criatividade no código também é alimentada fora dele!",
  ],
  image: profilePic,
  links: [
    {
      title: "Dá uma olhada no Instagram",
      url: "https://www.instagram.com/neilton_seguins/",
      icon: InstagramLogoIcon,
    },
    {
      title: "Aqui meus projetos no GitHub",
      url: "http://www.github.com/NeiltonSeguins",
      icon: GitHubLogoIcon,
    },
    {
      title: "LinkedIn fica a seu critério",
      url: "https://www.linkedin.com/in/ne%C3%ADlton-seguins/",
      icon: LinkedInLogoIcon,
    },
    {
      title: "seguins.neilton@gmail.com",
      url: "mailto:seguins.neilton@gmail.com",
      icon: EnvelopeOpenIcon,
    },
  ],
} as AboutPageData;

const About = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Texto da seção */}
        <div>
          <h1 className="text-4xl font-bold mb-6">
            E aí, tudo bem? Sou {aboutData.name}, prazer!
          </h1>
          {aboutData.description.map((text, index) => (
            <p key={index} className=" leading-relaxed mb-4">
              {text}
            </p>
          ))}
        </div>

        {/* Imagem e links */}
        <div className="text-center lg:text-left">
          <Image
            src={aboutData.image}
            alt={aboutData.name}
            className="rounded-full shadow-lg mb-6 mx-auto lg:mx-0"
          />
          <ul className="space-y-4">
            {aboutData.links.map((link) => (
              <AboutLinkItem key={link.url} item={link} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
