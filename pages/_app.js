import Layout from "../components/layout";
import "../styles/globals.css";
import Context from "../components/context";

function MyApp({ Component, pageProps }) {
  return (
    <Context>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context>
  );
}

export default MyApp;
