import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContentArtikel from "./components/ContentArtikel";
import Header from "./components/Header";
import LeftNavbar from "./components/LeftNavbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ARTIKEL | DASHBOARD</title>
        <meta name="description" content="Sandbox Admin | Artikel" />
        <link rel="icon" href="/SandboxSmall.ico" />
      </Head>
      <div className={styles.container}>
        <LeftNavbar />
        <Header name="Artikel" />
        <ContentArtikel />
      </div>
    </div>
  );
}
