import React from "react";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import ShareIcon from "../../atoms/shareIcon";
import DownloadBanner from "../../atoms/downloadBanner";

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
    <div className="mt-10 container mx-auto">
      <p className="my-5 text-xs text-center text-zinc-500">
        “Blinkit” is owned & managed by "Blink Commerce Private Limited" (formerly known as Grofers India Private Limited) and is
        not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services
        business operated by “Redstone Consultancy Services Private Limited”.
      </p>
      <div className="mt-10 mb-5 text-xs flex items-center justify-between bg-zinc-50 px-3 py-3 text-zinc-500">
        <div className="w-1/3">
          <p>© Blink Commerce Private Limited (formerly known as Grofers India Private Limited), 2016-2023</p>
        </div>
        <DownloadBanner />
        <div className="flex items-center">
          {footerIcons?.map((icon) => (
            <ShareIcon Icon={icon.icon} link={icon.link} />
          ))}
        </div>
      </div>
    </div>
  );
}
