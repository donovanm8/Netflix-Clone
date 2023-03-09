import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useEffect, useState } from "react";

function Nav() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-4 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="navLink">Home</li>
          <li className="navLink">TV Shows</li>
          <li className="navLink">Movies</li>
          <li className="navLink">New & Popular</li>
          <li className="navLink">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <MagnifyingGlassIcon className="hidden w-6 h-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="w-6 h-6" />
        <Link href="/account">
          <img
            src="https://i.kym-cdn.com/photos/images/newsfeed/001/230/774/9b2.gif"
            alt=""
            className="cursor-pointer rounded w-8"
          />
        </Link>
      </div>
    </header>
  );
}

export default Nav;
