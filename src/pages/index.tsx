import { type NextPage } from "next";
import Layout from "@/components/Layout";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "@/utils/api";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Layout>
        <main className="">
          <div className="hero relative h-[550px] overflow-hidden">
            <Image
              className="-z-10 object-cover"
              src="/hero.png"
              alt="heroImg"
              quality={100}
              fill
            />
            <div className="hero-text  flex h-full flex-col items-center justify-center  text-white">
              <h1 className="extra-bold p-3 text-6xl">Headless blog CMS</h1>
              <p className="text-center text-xl text-secondery">
                A Developer First blogging platform, for createing and <br />
                mannging blog posts. create post with our edior and connect
                <br /> it to your app.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
