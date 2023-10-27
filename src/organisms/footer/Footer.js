import React from "react";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import ShareIcon from "../../atoms/shareIcon";
import DownloadBanner from "../../atoms/downloadBanner";
import VerticalWrapper from "../../atoms/verticalWrapper";
import HorizontalWrapper from "../../atoms/horizontalWrapper";
import Container from "../../atoms/container";
import Text from "../../atoms/text";

const footerIcons = [
  {
    link: "https://www.facebook.com/blinkit.india/",
    icon: FaFacebookF,
  },
  {
    link: "https://twitter.com/i/flow/login?redirect_after_login=%2Fletsblinkit%2F",
    icon: FaTwitter,
  },
  {
    link: "https://www.instagram.com/letsblinkit/",
    icon: FaInstagram,
  },
  {
    link: "https://in.linkedin.com/company/letsblinkit",
    icon: FaLinkedinIn,
  },
];

export default function Footer() {
  return (
    <Container className="mt-10 container mx-auto">
      <Text dim size="tiny" center className="my-5">
        “Blinkit” is owned & managed by "Blink Commerce Private Limited" (formerly known as Grofers India Private Limited) and is
        not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services
        business operated by “Redstone Consultancy Services Private Limited”.
      </Text>
      <HorizontalWrapper justify="space-between" className="mt-10 mb-5 text-xs bg-zinc-50 px-3 py-3 text-zinc-500">
        <div className="w-1/3">
          <p>© Blink Commerce Private Limited (formerly known as Grofers India Private Limited), 2016-2023</p>
        </div>
        <DownloadBanner />
        <HorizontalWrapper>
          {footerIcons?.map((icon) => (
            <ShareIcon Icon={icon.icon} link={icon.link} />
          ))}
        </HorizontalWrapper>
      </HorizontalWrapper>
    </Container>
  );
}
