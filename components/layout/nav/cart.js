import { ShopContext } from "../../context";
import { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

const Cart = () => {
  const context = useContext(ShopContext);
  return (
    <Link href="/checkout">
      <div className="text-[32px] relative mr-5 cursor-pointer">
        <AiOutlineShoppingCart />
        <div className="flex bg-red-400 text-white justify-center items-center text-[12px] px-[5px] rounded-full absolute top-0 right-0 translate-x-3/4 -translate-y-2">
          {context.products
            .map((product) => product.quantity)
            .reduce((x, y) => x + y, 0)}
        </div>
      </div>
    </Link>
  );
};

export default Cart;
