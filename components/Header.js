import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import {useContext, useState} from "react";
import {CartContext} from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import Image from "next/image";



const StyledHeader = styled.header`
background: rgb(0,36,35);
background: linear-gradient(90deg, rgba(0,36,35,1) 0%, rgba(4,25,76,1) 10%, rgba(6,21,91,1) 26%, rgba(8,16,110,1) 48%, rgba(9,13,121,1) 62%, rgba(9,13,121,1) 75%, rgba(8,26,131,1) 90%, rgba(5,83,172,1) 96%, rgba(44,133,158,1) 100%);
`;
const Logo = styled(Link)`
  color:#fff;
  text-decoration:none;

  display:flex;
  z-index: 3;
  gap:5px;

  

`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;

`;
const Icon = styled.div`
  display: flex;
  margin-bottom:20px;

`;

const Imagewrapper = styled.div`
 position: absolute;
 top:0;
@media screen and (min-width: 768px) {
  
right:40px;

  }

right:0;
@media screen and (min-width: 1200px) {
right:80px;


  }
@media screen and (min-width: 1400px) {
right:120px;


  }
`;
const P = styled.div`
 margin-right:60px;
 @media screen and (min-width: 992px) {
   margin-right:60px;


  }
 @media screen and (min-width: 1200px) {
   margin-right:20px;


  }
 
@media screen and (min-width: 768px) {
  
 margin-right:100px;

  }

`;


const StyledNav = styled.nav`
  ${props => props.mobileNavActive ? `
    display: block;
  ` : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color:red;
  @media screen and (min-width: 768px) {
    display: flex;
    gap:40px;
    align-items: baseline;
    position: static;
    padding: 0;
    background-color:transparent;
  }
`;
const NavLink = styled(Link)`
  display: block;
  color:#aaa;
  text-decoration:none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding:0;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border:0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const {cartProducts} = useContext(CartContext);
  const [mobileNavActive,setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          
          <StyledNav mobileNavActive={mobileNavActive}>
           
           
           
            
           <Icon> <NavLink href={'/cart'}><Image width={30} height={30} src="/shopping.png"></Image> <span> ({cartProducts.length})</span></NavLink></Icon>
            <NavLink href={'/products'}>همه محصولات</NavLink>
            <NavLink href={'/'}>خانه</NavLink>
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
            <BarsIcon />
          </NavButton>

          <Logo  href={'/'}> 
        
         <Imagewrapper>
             <Image  width={70} height={70} src="/zlogo.png"/> 
            
          </Imagewrapper>
          <P><p>تصفیه آب زمزم</p></P>
          
           
          </Logo>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}