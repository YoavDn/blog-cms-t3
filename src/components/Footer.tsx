import Image from "next/image";

const Footer = () => (
  <main className="flex flex-col items-center gap-4 bg-brand py-16">
    <div className="flex flex-col justify-center">
      <Image
        src="/bloggie.svg"
        alt="logo"
        className="m-auto h-auto w-44 py-3 "
        width={20}
        height={20}
      />
      <h2 className=" text-white">Easy ways to create blogs</h2>
    </div>
    <div className="h-[1px] w-full bg-brand-light" />
    <h2 className="text-white">© 2023 Blogie. All rights reserved.</h2>
  </main>
);

export default Footer;
