import { Avatar, AvatarFallback } from "../ui/avatar";
import SocialLinks from "../SocialLinks";
import profilePic from "../../../public/profile.png";

import { useTranslations } from "next-intl";
import Image from "next/image";

const Profile = () => {
  const t = useTranslations("Profile");

  return (
    <section className="pb-12">
      <Avatar className="w-24 h-24 relative">
        <Image
          src={profilePic}
          alt="Neilton Seguins"
          fill
          sizes="(max-width: 768px) 100vw, 96px"
          className="object-cover aspect-square h-full w-full"
          priority
        />
        <AvatarFallback>NS</AvatarFallback>
      </Avatar>
      <h1
        className="text-4xl font-bold leading-tight"
        dangerouslySetInnerHTML={{ __html: t.raw("role") }}
      />
      <p className="mt-4 mb-4 max-w-2xl">{t("bio")}</p>
      <SocialLinks />
    </section>
  );
};

export default Profile;
