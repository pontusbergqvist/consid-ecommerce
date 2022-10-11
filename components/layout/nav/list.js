import Link from "next/link";
import { useRouter } from "next/router";

const List = () => {
  const router = useRouter();
  return (
    <ul className="hidden items-center tablet:flex">
      <Link href="/">
        <li
          className="mx-2 cursor-pointer"
          style={
            router.route === "/"
              ? { borderBottom: "2px solid #222" }
              : { borderBottom: "2px solid white" }
          }
        >
          Hem
        </li>
      </Link>
      <Link href="/products">
        <li
          className="mx-2 cursor-pointer"
          style={
            router.route === "/products"
              ? { borderBottom: "2px solid #222" }
              : { borderBottom: "2px solid white" }
          }
        >
          Products
        </li>
      </Link>
      <Link href="/about">
        <li
          className="mx-2 cursor-pointer"
          style={
            router.route === "/about"
              ? { borderBottom: "2px solid #222" }
              : { borderBottom: "2px solid white" }
          }
        >
          About
        </li>
      </Link>
      <Link href="/contact">
        <li
          className="mx-2 cursor-pointer"
          style={
            router.route === "/contact"
              ? { borderBottom: "2px solid #222" }
              : { borderBottom: "2px solid white" }
          }
        >
          Contact
        </li>
      </Link>
    </ul>
  );
};

export default List;
