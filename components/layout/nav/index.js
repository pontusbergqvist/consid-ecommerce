import List from "./list";
import Hamburger from "./hamburger";
import Cart from "../../cart";

const Nav = () => {
  return (
    <nav className="flex justify-between py-5 relative max-w-[1200px] mx-auto">
      <List />
      <div className="flex items-center justify-between absolute right-0">
        <Cart items={3} />
        <div className="ml-5 block tablet:hidden">
          <Hamburger />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
