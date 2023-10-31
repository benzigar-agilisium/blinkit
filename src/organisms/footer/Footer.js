import React from "react";

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import ShareIcon from "../../atoms/shareIcon";
import FooterDownloadBanner from "../../molecules/footerDownloadBanner";
import VerticalWrapper from "../../atoms/verticalWrapper";
import HorizontalWrapper from "../../atoms/horizontalWrapper";
import Container from "../../atoms/container";
import Text from "../../atoms/text";

import { footerIcons } from "./footer.data";

const renderFooter = () => footerIcons?.map((icon) => <ShareIcon Icon={icon.icon} link={icon.link} />);

export default function Footer() {
  return (
    <Container className="mt-10">
      <Text dim size="tiny" center className="mx-3 lg:mx-0 my-5">
        “Blinkit” is owned & managed by "Blink Commerce Private Limited" (formerly known as Grofers India Private Limited) and is
        not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services
        business operated by “Redstone Consultancy Services Private Limited”.
      </Text>
      <HorizontalWrapper cutOnPhone justify="space-between" className="mt-10 mb-5 text-xs bg-zinc-50 px-3 py-3 text-zinc-500">
        <div className="lg:lg:w-1/3">
          <Text size="tiny" center>
            © Blink Commerce Private Limited (formerly known as Grofers India Private Limited), 2016-2023
          </Text>
        </div>
        <FooterDownloadBanner />
        <HorizontalWrapper>{renderFooter()}</HorizontalWrapper>
      </HorizontalWrapper>
    </Container>
  );
}
