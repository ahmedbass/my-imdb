import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
          <title>My IMDB</title>
          <meta name="description" content="My IMDB clone"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <main className={styles.main}>
          <h1>IMDB</h1>
        </main>

        <footer className={styles.footer}>
          <p className="">
            Copyright &copy; {new Date().getFullYear()} Ahmed Bass
          </p>
        </footer>
      </div>
  );
}
