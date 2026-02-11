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
import { getTranslations, setRequestLocale } from "next-intl/server";

interface AboutPageData {
  name: string;
  image: StaticImageData;
  links: LinkItemData[];
}

const About = async (props: { params: Promise<{ locale: string }> }) => {
  const params = await props.params;
  const { locale } = params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "AboutPage" });

  const aboutData = {
    name: "Neilton",
    image: profilePic,
    links: [
      {
        title: t("links.instagram"),
        url: "https://www.instagram.com/neilton_seguins/",
        icon: InstagramLogoIcon,
      },
      {
        title: t("links.github"),
        url: "http://www.github.com/NeiltonSeguins",
        icon: GitHubLogoIcon,
      },
      {
        title: t("links.linkedin"),
        url: "https://www.linkedin.com/in/ne%C3%ADlton-seguins/",
        icon: LinkedInLogoIcon,
      },
      {
        title: t("links.email"),
        url: "mailto:seguins.neilton@gmail.com",
        icon: EnvelopeOpenIcon,
      },
    ],
  } as AboutPageData;

  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Texto da seção */}
        <div>
          <h1 className="text-4xl font-bold mb-6">
            {t("title", { name: aboutData.name })}
          </h1>
          <p className="leading-relaxed mb-4">{t("description_1")}</p>
          <p className="leading-relaxed mb-4">{t("description_2")}</p>
          <p className="leading-relaxed mb-4">{t("description_3")}</p>
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
