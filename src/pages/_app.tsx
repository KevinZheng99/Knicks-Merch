import Head from "next/head";
import Women from "./women";
import Men from "./men";
import Kids from "./kids";
import { useRouter } from "next/router";
import "../styles/styles.css";
import Shop from "./women/shop";

export default function Home() {
  const router = useRouter();

  const path = router.asPath;

  return (
    <>
      <Head>
        <title>New York Knicks Merch</title>
      </Head>

      {path === "/" || path === "/women" ? <Women /> : <></>}
      {path === "/women/shop" ? <Shop /> : <></>}
      {path === "/men" ? <Men /> : <></>}
      {path === "/kids" ? <Kids /> : <></>}
    </>
  );
}
