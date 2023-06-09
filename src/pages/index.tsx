import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Nav from "~/components/Nav";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>POG BLOG</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen min-w-screen justify-center bg-slate-950">
        <Nav/>
      </main>
    </>
  );
};

export default Home;
