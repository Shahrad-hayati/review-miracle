import Link from "next/link";

function Navbar() {
  return (
    <nav>
      <ul className="flex  gap-3">
        <li>
          <Link
            className="text-orange-800 font-bold font-roboto hover:underline"
            href="/"
          >
            Miracle- Home
          </Link>
        </li>
        <li className="ml-auto">
          <Link className="text-orange-800 hover:underline" href="/reviews">
            Reviews
          </Link>
        </li>
        <li>
          <Link
            className="text-orange-800 hover:underline"
            href="/about"
            prefetch={false}
          >
            About us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
