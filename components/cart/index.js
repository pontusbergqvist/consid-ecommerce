import { AiOutlineShoppingCart } from "react-icons/ai";

const Cart = ({ items }) => {
  return (
    <div className="text-[32px] relative mr-5">
      <AiOutlineShoppingCart />
      <div className="flex bg-red-400 text-white justify-center items-center text-[12px] px-[5px] rounded-full absolute top-0 right-0 translate-x-3/4 -translate-y-2">
        {items}
      </div>
    </div>
  );
};

export default Cart;
