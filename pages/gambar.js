import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContentGambar from "./components/ContentGambar";
import Header from "./components/Header";
import LeftNavbar from "./components/LeftNavbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GAMBAR | DASHBOARD</title>
        <meta name="description" content="Sandbox Admin | Pelaporan" />
        <link rel="icon" href="/SandboxSmall.ico" />
      </Head>
      <div className={styles.container}>
        <LeftNavbar />
        <Header name="Gambar" />
        <ContentGambar />
      </div>
    </div>
  );
}
