
import Head from 'next/head'
import Image from "next/image";

export default function Hello() {
  console.log("entrando aqui");
  return (
    <>
    <Head>
      <title>Hello There :: My Blog</title>
      <meta property='og:title' content='Hwllow there :: My Blog'/>
    </Head>
    <article>
      <h1>Hello There!</h1>
      <Image
        src={"/post/hello-there/pexels.jpeg"}
        alt="Madelyn"
        width={640}
        height={727}
      />
    </article>
    </>
  );
}
