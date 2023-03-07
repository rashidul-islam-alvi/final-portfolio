import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <NavBar />
      <Component {...pageProps} />
    </Layout>
  );
}
