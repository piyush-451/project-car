import Layout from "./components/Layout/Layout";
import {AuthProvider} from '../src/context/authContext'
import TokenContextProvider from '../src/context/tokenContext/tokenContextProvider'
import {useEffect } from "react"

function App() {
  // return <Layout />;
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  return (
    <AuthProvider>
      <TokenContextProvider>
        <Layout/>
      </TokenContextProvider>
    </AuthProvider>
  )

}

export default App;
