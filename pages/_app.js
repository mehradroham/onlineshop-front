import {createGlobalStyle} from "styled-components";
import {CartContextProvider} from "@/components/CartContext";
import ErrorBoundary from '@/lib/ErrorBoundary'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  body{
 background: rgb(5,107,172);
background: linear-gradient(90deg, rgba(5,107,172,1) 10%, rgba(44,140,158,1) 100%);
    padding:0;
    margin:0;
    font-family: 'Poppins', sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
    <ErrorBoundary>
     <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </ErrorBoundary>
     
    </>
  );
}
