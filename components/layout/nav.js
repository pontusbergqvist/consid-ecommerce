import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="flex justify-center py-5">
      <ul className="flex items-center">
        <Link href="/">
          <li className="mx-2 cursor-pointer" style={router.route === '/' ? {borderBottom: '2px solid #222'} : { borderBottom: '2px solid white'}}>Hem</li>
        </Link>
        <Link href="/produkter">
          <li className="mx-2 cursor-pointer" style={router.route === '/produkter' ? {borderBottom: '2px solid #222'} : { borderBottom: '2px solid white'}}>Produkter</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
