import { Toaster } from "react-hot-toast";
import { Layout } from "../components";
import { StateContext } from "../context/StateContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <StateContext>
        <Toaster />
        <Component {...pageProps} />;
      </StateContext>
    </Layout>
  );
}

export default MyApp;
