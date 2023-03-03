import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContentAudio from "./components/ContentAudio";
import Header from "./components/Header";
import LeftNavbar from "./components/LeftNavbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AUDIO | DASHBOARD</title>
        <meta name="description" content="Sandbox Admin | Audio" />
        <link rel="icon" href="/SandboxSmall.ico" />
      </Head>
      <div className={styles.container}>
        <LeftNavbar />
        <Header name="Audio" />
        <ContentAudio />
      </div>
    </div>
  );
}
