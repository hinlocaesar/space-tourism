import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MobileHome from "../components/mobile/mobile_home";
import MobileDestA from "../components/mobile/mobile_destination_a";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MobileDestA />
    </div>
  );
}
