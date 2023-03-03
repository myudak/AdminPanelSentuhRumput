import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContentSubmisi from "./components/ContentSubmisi.js";
import Header from "./components/Header";
import LeftNavbar from "./components/LeftNavbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SUBMISI | DASHBOARD</title>
        <meta name="description" content="Sandbox Admin | Submisi" />
        <link rel="icon" href="/SandboxSmall.ico" />
      </Head>
      <div className={styles.container}>
        <LeftNavbar />
        <Header name="Home" />
        <ContentSubmisi />
      </div>
    </div>
  );
}
