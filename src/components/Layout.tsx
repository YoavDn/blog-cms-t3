import Nav from "./Nav";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="">
        <Nav />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
