import styled from "styled-components";
import ProductBox from "@/components/ProductBox";

const StyledProductsGrid = styled.div`
  display: grid;
  direction:rtl;
  grid-template-columns: 1fr ;
  gap: 40px;
  margin-top:100px;
  margin-bottom:140px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr  1fr;
    gap: 40px;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
  }
  
`;

export default function ProductsGrid({products}) {
  return (
    <StyledProductsGrid>
      {products?.length > 0 && products.map(product => (
        <ProductBox key={product._id} {...product} />
      ))}
    </StyledProductsGrid>
  );
}