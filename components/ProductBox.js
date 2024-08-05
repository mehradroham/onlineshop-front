import styled from "styled-components";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import Link from "next/link";
import {useContext} from "react";
import {CartContext} from "@/components/CartContext";

const ProductWrapper = styled.div`
margin-bottom:40px;
`;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 250px;
  margin:0 auto;
  width:60%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

   @media screen and (min-width: 768px) {
  height: 300px;
  
  width:320px;
  }
   
  img{
   max-height:200px;
    max-width:80%;
  @media screen and (min-width: 768px) {
    height:250px;
    width:250px;
  }
   
    
  
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size:1.2rem;
  color:inherit;
  text-decoration:none;
  margin:20px;
  direction:rtl;
  display: block;
  margin-right:auto;
  margin-left:auto;
  width:200px;
  
`;

const ProductInfoBox = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  direction:rtl;
`;

const PriceRow = styled.div`
  display: block;
  margin-right:auto;
  margin-left:auto;
  width:200px;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content:space-between;
  margin-top:2px;
`;

const Price = styled.div`
  font-size: 0.8rem;
  font-weight:400;
  text-align: right;
  
  @media screen and (min-width: 768px) {
    font-size: 1rem;
    font-weight:600;
    text-align: center;
    margin-left:10px;
  }
`;

export default function ProductBox({_id,title,description,price,images}) {
  const {addProduct} = useContext(CartContext);
  const url = '/product/'+_id;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <img src={images?.[0]} alt=""/>
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>
          {price} <span> تومان </span> 
          </Price>
          <Button block onClick={() => addProduct(_id)} primary outline>
           افزودن به سبد
          </Button>
        </PriceRow>
      </ProductInfoBox>
     
    </ProductWrapper>
  );
}