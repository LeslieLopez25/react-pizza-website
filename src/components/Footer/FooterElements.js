import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: var(--primary-dark-color);
`;

export const FooterWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  max-width: 81.25rem;
`;

export const SocialMedia = styled.section`
  width: 100%;
  max-width: 81.25rem;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto 0 auto;
  max-width: 68.75rem;

  @media screen and (max-width: 51.25em) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  display: flex;
  justify-self: start;
  align-items: center;
  color: var(--white);
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  -webkit-text-stroke: 1.5px hsl(92.1, 43.9%, 38.4%);
  margin-bottom: 1rem;
  cursor: pointer;
`;

export const WebsiteRights = styled.div`
  color: var(--white);
  -webkit-text-stroke: 0.5px hsl(92.1, 43.9%, 38.4%);
  margin-bottom: 0.5rem;

  @media screen and (max-width: 30em) {
    margin-bottom: 1.25rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 15rem;
`;

export const SocialIconsLink = styled.a`
  color: var(--white);
  font-size: 1.5rem;

  &:hover {
    color: var(--secondary-dark-color);
  }
`;
