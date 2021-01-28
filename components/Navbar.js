import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="log">Ninja List</div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/ninjas">
          <a>Ninjas List</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
