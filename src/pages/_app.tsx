import Head from "next/head";
import Women from "./women";
import "../styles/styles.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>New York Knicks Merch</title>
      </Head>

      <Women />
    </>
  );
}
