import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContentLaporan from "./components/Content/ContentLaporan";
import Header from "./components/Header";
import LeftNavbar from "./components/LeftNavbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PELAPORAN | DASHBOARD</title>
        <meta name="description" content="Sandbox Admin | Pelaporan" />
        <link rel="icon" href="/SandboxSmall.ico" />
      </Head>
      <div className={styles.container}>
        <LeftNavbar />
        <Header name="Pelaporan" />
        <ContentLaporan />
      </div>
    </div>
  );
}
