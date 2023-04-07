import Head from "next/head";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

// components
import Layout from "@/components/Layout";
import WelcomeMsg from "@/components/WelcomeMsg";

const inter = Inter({ subsets: ["latin"] });

interface UserData {
  id: string;
  email: string;
}

export default function Home() {
  const [value, setValue] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchUser = async () => {
    try {
      const response = await fetch("/api/users", {
        method: "GET",
      });
      const json = await response.json();
      if (response.status === 200) {
        console.log(json.data);
        setValue(json);
      }
    } catch (e) {
      console.log({
        message: "Restricted",
        e,
      });
    }
  };

  useEffect(() => {
    console.log("side effect rerender");
    fetchUser();
  }, []);

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
      {isLoading ? (
        "loading"
      ) : (
        <Layout>{value ? `Hello` : <WelcomeMsg />}</Layout>
      )}
    </>
  );
}
