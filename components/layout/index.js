import Nav from "./nav";

const Layout = ({ children }) => {
  return (
    <div className="px-1">
      <Nav />
      <main className="max-w-[1200px] mx-auto my-12">{children}</main>
    </div>
  );
};

export default Layout;
