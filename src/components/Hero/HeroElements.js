import styled from "styled-components";
import ImgBg from "../../images/pizza-1.jpg";

export const HeroContainer = styled.div`
  background: linear-gradient(
      to right,
      hsl(19.9, 100%, 36.7%, 0.1),
      hsl(35.1, 91.8%, 62%, 0.3)
    ),
    url(${ImgBg});
  height: 650px;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100% - 80px);
  max-height: 100%;
  padding: 0rem calc((103% - 1300px) / 2);
`;
export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: var(--white);
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;
export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px var(--primary-light-color);
  letter-spacing: 3px;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: var(--secondary-dark-color);
  color: var(--white);
  transition: 0.2s ease-out;

  &:hover {
    background: var(--secondary-light-color);
    transition: 0.2s ease-out;
    cursor: pointer;
    color: var(--black);
  }
`;
