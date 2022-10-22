import { Toaster } from "react-hot-toast";
import { Layout } from "../components";
import { StateContext } from "../context/StateContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
