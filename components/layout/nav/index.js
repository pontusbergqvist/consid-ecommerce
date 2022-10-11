import List from "./list";
import Hamburger from "./hamburger";

const Nav = () => {
  return (
    <nav className="flex justify-center py-5 relative">
      <List />
      <Hamburger />
    </nav>
  );
};

export default Nav;
