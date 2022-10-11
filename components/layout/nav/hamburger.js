import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Hamburger = () => {
  const [active, setActive] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setActive(false);
  }, [router.route]);

  return (
    <div className="absolute tablet:hidden block right-0">
      <div
        className="cursor-pointer h-[25px] w-[35px] flex flex-col justify-between"
        style={
          active
            ? { justifyContent: "space-evenly" }
            : { justifyContent: "space-between" }
        }
        onClick={() => setActive(!active)}
      >
        <div className="bg-black h-[2px] w-full"></div>
        <div
          className="bg-black h-[2px] w-full"
          style={active ? { display: "none" } : { display: "block" }}
        ></div>
        <div className="bg-black h-[2px] w-full"></div>
      </div>
      {active ? (
        <ul className="absolute right-0 my-4 text-right bg-slate-300 pl-16 py-1 pr-1 rounded">
          <Link href="/">
            <li className="cursor-pointer p-2">Hem</li>
          </Link>
          <Link href="/products">
            <li className="cursor-pointer p-2">Products</li>
          </Link>
          <Link href="/about">
            <li className="cursor-pointer p-2">About</li>
          </Link>
          <Link href="/contact">
            <li className="cursor-pointer p-2">Contact</li>
          </Link>
        </ul>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Hamburger;
