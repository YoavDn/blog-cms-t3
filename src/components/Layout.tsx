import Nav from "./Nav";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="">
        <Nav />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
