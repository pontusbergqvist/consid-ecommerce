import List from "./list";
import Hamburger from "./hamburger";
import Cart from "../../cart";

const Nav = () => {
  return (
    <nav className="flex justify-between py-5 relative max-w-[1200px] mx-auto">
      <List />
      <Hamburger />
      <Cart items={3} />
    </nav>
  );
};

export default Nav;
