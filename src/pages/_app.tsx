import { AppProps } from "next/app";
import NextHead from "next/head";
import "../styles/global.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextHead>
        <title>Garuchu Extension</title>
        <meta name="viewport" content="width=device-width" />
      </NextHead>
      <Component {...pageProps} />
    </>
  );
}

export default App;
