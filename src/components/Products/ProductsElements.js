import styled from "styled-components";

export const ProductsContainer = styled.div`
  background: var(--primary-light-color);
  color: var(--black);
  padding: 5rem calc((100% - 81.25rem) / 2);
  min-height: 50rem;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  line-height: 2;
  margin: 0 2rem;
  width: 18.75rem;
`;

export const ProductImg = styled.img`
  min-width: 18.75rem;
  max-width: 100%;
  height: 18.75rem;
  box-shadow: 8px 8px var(--primary-dark-color);
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2.5rem, 2vw, 3rem);
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const ProductButton = styled.button`
  background: var(--secondary-dark-color);
  color: var(--white);
  font-size: 1rem;
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
