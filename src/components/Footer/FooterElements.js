import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: var(--primary-dark-color);
`;

export const FooterWrap = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: var(--white);
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  -webkit-text-stroke: 1.5px hsl(92.1, 43.9%, 38.4%);
`;

export const WebsiteRights = styled.div`
  color: var(--white);
  margin-bottom: 0.5rem;
  -webkit-text-stroke: 0.5px hsl(92.1, 43.9%, 38.4%);
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconsLink = styled.a`
  color: var(--white);
  font-size: 24px;

  &:hover {
    color: var(--secondary-dark-color);
  }
`;
