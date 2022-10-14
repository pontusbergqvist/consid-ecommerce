import { useContext, useEffect } from "react";
import { FcOk } from "react-icons/fc";
import { ShopContext } from "./context";
import Link from "next/link";

const OrderConfirmation = () => {
  const context = useContext(ShopContext);

  useEffect(() => {
    context.reset();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-[22px] py-5">
      <div className="text-[40px]">
        <FcOk />
      </div>
      <p className="my-3">Your order is complete!</p>
      <Link href="/">
        <button className="text-[16px] bg-blue-500 text-white p-2 rounded">
          Return to home
        </button>
      </Link>
    </div>
  );
};

export default OrderConfirmation;
