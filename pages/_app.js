import GoToTop from "../components/GoToTop";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <NavBar />
      <SideBar />
      <GoToTop />
      <Component {...pageProps} />
    </Layout>
  );
}
