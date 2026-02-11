import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import SocialLinks from "../SocialLinks";
import profilePic from "../../../public/profile.png";

import { useTranslations } from "next-intl";

const Profile = () => {
  const t = useTranslations("Profile");

  return (
    <section className="pb-12">
      <Avatar className="w-24 h-24">
        <AvatarImage
          src={profilePic.src}
          alt="Neilton Seguins"
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
