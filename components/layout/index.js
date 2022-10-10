import Nav from "./nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="max-w-[1200px] mx-auto px-1">{children}</main>
    </>
  );
};

export default Layout;
