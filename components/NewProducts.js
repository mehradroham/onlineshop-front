import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";

const Title = styled.h2`
  font-size: 2rem;
  margin:30px 0 20px;
  font-weight: normal;
    direction:rtl;
  
`;

export default function NewProducts({products}) {
  return (
    <Center>
      <Title id="new" >محصولات جدید</Title>
      <ProductsGrid products={products} />
    </Center>
  );
}