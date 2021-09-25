import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconsLink
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Pizza Pros</SocialLogo>
            <WebsiteRights>
              Pizza Pros © {new Date().getFullYear()}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconsLink
                href="/"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </SocialIconsLink>
              <SocialIconsLink
                href="/"
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </SocialIconsLink>
              <SocialIconsLink
                href="/"
                target="_blank"
                aria-label="Youtube"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </SocialIconsLink>
              <SocialIconsLink
                href="/"
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </SocialIconsLink>
              <SocialIconsLink
                href="/"
                target="_blank"
                aria-label="Linkedin"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </SocialIconsLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
