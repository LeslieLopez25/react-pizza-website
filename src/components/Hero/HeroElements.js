import styled from "styled-components";
import ImgBg from "../../images/pizza-1.jpg";

export const HeroContainer = styled.div`
  background: linear-gradient(
      to right,
      hsl(19.9, 100%, 36.7%, 0.1),
      hsl(35.1, 91.8%, 62%, 0.3)
    ),
    url(${ImgBg});
  background-position: center;
  background-size: cover;
  height: 40.62rem;
`;

export const HeroContent = styled.div`
  padding: 0rem calc((103% - 1300px) / 2);
  height: calc(100% - 5rem);
  max-height: 100%;
`;
export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: var(--white);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;
  padding: 0 2rem;
  height: 100%;
  max-height: 100%;
  width: 40.62rem;

  @media screen and (max-width: 40.62em) {
    width: 100%;
  }
`;
export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  box-shadow: 3px 5px var(--primary-light-color);
  letter-spacing: 0.18rem;
  margin-bottom: 1rem;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
  background: var(--secondary-dark-color);
  color: var(--white);
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  transition: 0.2s ease-out;

  &:hover {
    background: var(--secondary-light-color);
    color: var(--black);
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
