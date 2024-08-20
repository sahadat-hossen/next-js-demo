import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import Link from "next/link";
import ShoppingCart from "./ShoppingCart";

export default function NavBar() {
  const { handleCartClick, cartCount } = useShoppingCart();
  return (
    <nav className="py-5 px-12 flex justify-between">
      <Link href="/">
        <p className="bg-white text-3xl font-bold underline underline-offset-4 decoration-wavy decoration-2 decoration-emerald-500">
          Placovu Fruit Store
        </p>
      </Link>
      <Link href="/order">
        <p className="bg-white underline underline-offset-4">
          Place a Order
        </p>
      </Link> 
      <Link href="/login">
        <p className="bg-white underline underline-offset-4">
          Login
        </p>
      </Link> 
      <Link href="/registration">
        <p className="bg-white underline underline-offset-4">
          Create a Account
        </p>
      </Link>
      <button className="relative" onClick={() => handleCartClick()}>
        <Image
          src="./cart.svg"
          width={40}
          height={40}
          alt="shopping cart icon"
        />
        <div className="rounded-full flex justify-center items-center bg-emerald-500 text-xs text-white absolute w-6 h-5 bottom-6 -right-1">
          {cartCount}
        </div>
      </button>
      <ShoppingCart />
    </nav>
  );
}
