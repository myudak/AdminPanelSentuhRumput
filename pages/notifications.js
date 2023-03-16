import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContentNotif from "./components/Content/ContentNotif";
import Header from "./components/Header";
import LeftNavbar from "./components/LeftNavbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PELAPORAN | DASHBOARD</title>
        <meta name="description" content="Sandbox Admin | Notifications" />
        <link rel="icon" href="/SandboxSmall.ico" />
      </Head>
      <div className={styles.container}>
        <LeftNavbar />
        <Header name="Notifications" />
        <ContentNotif />
      </div>
    </div>
  );
}
