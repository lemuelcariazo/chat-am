import Head from "next/head";
import { Inter } from "next/font/google";
import { useState } from "react";

// components
import Layout from "@/components/Layout";
import WelcomeMsg from "@/components/WelcomeMsg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>CHAT-AM</title>
        <meta
          name="description"
          content="Chat-AM the best and secure social application"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fireIcon.svg" />
      </Head>

      <Layout>
        <WelcomeMsg />
      </Layout>
    </>
  );
}
