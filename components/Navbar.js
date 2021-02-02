import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <Image src="/elephant.svg" width={80} height={40} alt="Logo" />
        </div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/members">
          <a>Members</a>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
