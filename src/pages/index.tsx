import { type NextPage } from "next";
import Layout from "@/components/Layout";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { api } from "@/utils/api";

import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const Futura = localFont({ src: "../../fonts/unicode.futurabb.ttf" });

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Layout>
        <main className="">
          <section className="hero relative h-[500px] overflow-hidden">
            <Image
              className="ms:bottom-4 sm:w-62 absolute bottom-0 right-12 hidden w-[200px] sm:block"
              src="/mascot.svg"
              alt="mascot"
              width={320}
              height={420}
            />
            <Image
              className="-z-10 object-cover"
              src="/hero.png"
              alt="heroImg"
              quality={100}
              priority
              fill
            />
            <div className="hero-text  mx-6 flex h-full flex-col gap-6 text-white  sm:w-7/12 sm:justify-center lg:m-auto lg:items-center lg:text-center">
              <h1
                className={`extra-bold  ms:mt-0 mt-12 text-4xl sm:text-6xl lg:text-7xl ${Futura.className}`}
              >
                Headless blog CMS
              </h1>
              <p className="text-brand-light sm:text-xl lg:text-center ">
                A Developer First blogging platform, for createing and mannging
                blog posts. create post with our edior and connect it to yourya
                app.
              </p>
              <button className="mt-4 w-48 rounded-xl bg-white p-2 px-7 text-xl text-black transition-all hover:shadow-md hover:shadow-brand-light lg:w-auto">
                Join Waitlist
              </button>
            </div>
          </section>
          <section className="container mx-auto flex flex-col items-center justify-between gap-8 px-6 py-24  md:flex-row lg:px-32">
            <div className="  basis-1/2  leading-8 ">
              <h2
                className={`${Futura.className} pb-3 text-xl md:text-4xl lg:text-5xl`}
              >
                Create and manage blog posts
              </h2>
              <p className="md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                quisquam vitae, sed sapiente aliquid sequi praesentium corporis
                at eveniet eligendi? Voluptas!
              </p>
            </div>
            <div className="-order-1 md:order-2 ">
              <Image
                src="/look-mom.png"
                width={300}
                height={400}
                alt="png"
                className="md:m-auto"
              ></Image>
            </div>
          </section>

          <section className="bg-slate-200">
            <div className="container mx-auto flex flex-col items-center justify-start gap-8  px-6 py-24  md:flex-row lg:px-32">
              <div className=" order-2 basis-1/2  leading-8">
                <h2
                  className={`${Futura.className} pb-3 text-xl md:text-4xl lg:text-5xl`}
                >
                  Design for Developers
                </h2>
                <p className="md:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  quisquam vitae, sed sapiente aliquid sequi praesentium
                  corporis at eveniet eligendi? Voluptas!
                </p>
              </div>
              <div className=" basis-1/2  ">
                <Image
                  src="/mascot-dev.png"
                  width={300}
                  height={400}
                  alt="png"
                ></Image>
              </div>
            </div>
          </section>
          <section className="bg-white">
            <div className="container mx-auto flex flex-col items-center justify-between gap-8  px-6 py-24  md:flex-row lg:px-32">
              <div className="  basis-1/2  leading-10">
                <h2
                  className={`${Futura.className} pb-3 text-xl md:text-4xl lg:text-5xl`}
                >
                  Completely headless
                </h2>
                <p className="md:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  quisquam vitae, sed sapiente aliquid sequi praesentium
                  corporis at eveniet eligendi? Voluptas!
                </p>
              </div>
              <div className="order-1 md:order-2">
                <Image
                  src="/headless.png"
                  width={300}
                  height={400}
                  alt="png"
                ></Image>
              </div>
            </div>
          </section>
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
