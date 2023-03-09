import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContentHome from "./components/Content/ContentHome";
import Header from "./components/Header";
import LeftNavbar from "./components/LeftNavbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HOME | DASHBOARD</title>
        <meta name="description" content="Sandbox Admin | Home" />
        <link rel="icon" href="/SandboxSmall.ico" />
      </Head>
      <div className={styles.container}>
        <LeftNavbar />
        <Header name="Home" />
        <ContentHome />
      </div>
    </div>
  );
}
