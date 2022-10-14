import { useContext, useState } from "react";
import { ShopContext } from "../components/context";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { Image } from "react-datocms";
import OrderConfirmation from "../components/orderConfirmation";

const Checkout = () => {
  const [orderIsSent, setOrderIsSent] = useState(false);
  const context = useContext(ShopContext);
  return !orderIsSent ? (
    <div className="flex mx-auto flex-col justify-center">
      <div className="flex flex-col justify-between border-b-2 border-black max-w-[600px] pb-5">
        {context.products.length !== 0 ? (
          context.products.map((product) => (
            <article
              key={product.id}
              className="flex justify-between w-full p-5 rounded bg-f3 my-1"
            >
              <div className="flex">
                <div className="flex items-center">
                  <div className="flex flex-col items-center text-[20px]">
                    <div
                      className="text-[16px] cursor-pointer"
                      onClick={() => context.incrementQuantity(product)}
                    >
                      <AiOutlineArrowUp />
                    </div>
                    {product.quantity}
                    <div
                      className="text-[16px] cursor-pointer"
                      onClick={() => context.decrementQuantity(product)}
                    >
                      <AiOutlineArrowDown />
                    </div>
                  </div>
                </div>
                <div className="h-full w-[100px] mx-4">
                  <Image data={product.mainImage.responsiveImage} />
                </div>
                <div className="">
                  <p className="text-[25px]">{product.name}</p>
                  <p className="text-[20px]">{product.price}:-</p>
                </div>
              </div>
              <button
                onClick={() => context.removeFromCart(product)}
                className="p-1 rounded"
              >
                <ImCross />
              </button>
            </article>
          ))
        ) : (
          <div>Shopping cart is empty!</div>
        )}
      </div>
      <div className="flex-start">
        <p className="text-[30px]">
          {/* {context.products
            .map((product) => Number(product.price) * product.quantity)
            .reduce((x, y) => x + y, 0)} */}
          {context.products
            .map((product) => product.price * product.quantity)
            .reduce((x, y) => x + y, 0)}
          :-
        </p>
        {context.products.length !== 0 && (
          <button
            className="bg-blue-500 p-2 text-white rounded"
            onClick={() => setOrderIsSent(true)}
          >
            Send order
          </button>
        )}
      </div>
    </div>
  ) : (
    <OrderConfirmation />
  );
};

export default Checkout;
