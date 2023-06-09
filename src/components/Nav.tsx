import Image from "next/image";

const Nav = () => {
  return (
    <>
      <div className="bg-brand">
        <main className="container mx-auto  flex items-center justify-between px-6  py-5 lg:px-32 ">
          <Image src="/bloggie.svg" height={132} width={132} alt="logo" />
          <nav className=" hidden text-white lg:flex">
            <ul className="text-ms flex text-lg font-semibold lg:gap-10  ">
              <li className="hover:underline">Blog</li>
              <li className="hover:underline">Stuff</li>
              <li className="hover:underline"> More</li>
            </ul>
          </nav>
          <button className=" rounded-lg  bg-white  px-3 py-1  text-secondery transition-all ease-in-out hover:text-brand hover:shadow-md ">
            Join us
          </button>
        </main>
      </div>
    </>
  );
};

export default Nav;
