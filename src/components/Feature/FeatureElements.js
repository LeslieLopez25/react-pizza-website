import styled from "styled-components";
import FeaturePic from "../../images/feature1.jpg";

export const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      to right,
      hsl(19.9, 100%, 36.7%, 0.1),
      hsl(35.1, 91.8%, 62%, 0.2)
    ),
    url(${FeaturePic});
  background-position: center;
  background-size: cover;
  color: var(--black);
  text-align: center;
  padding: 0 1rem;
  height: 25rem;
  max-height: 62.5rem;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
    -webkit-text-stroke: 1px var(--primary-dark-color);
  }

  p {
    font-size: clamp(1rem, 3vw, 2rem);
    -webkit-text-stroke: 1px var(--primary-dark-color);
    margin-bottom: 1rem;
  }
`;

export const FeatureButton = styled.button`
  background: var(--secondary-light-color);
  color: var(--black);
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  transition: 0.2s ease-out;

  &:hover {
    background: var(--secondary-dark-color);
    color: var(--white);
    transition: 0.2s ease-out;
    cursor: pointer;
  }
`;
