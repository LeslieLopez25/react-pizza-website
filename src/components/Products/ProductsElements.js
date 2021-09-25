import styled from "styled-components";

export const ProductsContainer = styled.div`
  min-height: 800px;
  padding: 5rem calc((100% - 1300px) / 2);
  background: var(--primary-light-color);
  color: var(--black);
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImg = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px var(--primary-dark-color);
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2.5rem, 2vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  text-transform: uppercase;
`;

export const ProductTitle = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
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
