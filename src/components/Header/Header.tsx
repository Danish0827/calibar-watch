"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import Link from "next/link";
import { BiMenuAltRight, BiSearch } from "react-icons/bi";
import Image from "next/image";
import Menu from "../Menu/Menu";
import MenuMobile from "../MenuMobile/MenuMobile";
import SearchBar from "./SearchBar";
import { IoClose } from "react-icons/io5";
import MobileSearch from "./MobileSearch";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showAllMenu, setShowAllMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavBar = () => {
    window.scrollY > 200
      ? window.scrollY > lastScrollY && !mobileMenu
        ? setShow("-translate-y-[80px]")
        : setShow("shadow-sm")
      : setShow("translate-y-0");
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavBar);
    return () => {
      window.removeEventListener("scroll", controlNavBar);
    };
  }, [lastScrollY]);
  return (
    <header
      className={`w-full h-[100px] md:h-[70px] bg-white flex items-center gap-3 justify-center z-40 sticky top-0 transition-transform duration-300  shadow-sm`}
    >
      <Wrapper className="md:gap-5 flex justify-between md:justify-center items-center px-0">
        <div className="lg:hidden">
          <MobileSearch hasScrolled={true} />
        </div>
        <Link href={"/"} className="flex md:hidden justify-center py-2">
          <Image
            src="/images/main_logo.png"
            alt="Our Office"
            height={100}
            width={200}
            className="w-36 lg:w-44"
          />
        </Link>
        {lastScrollY ? (
          <Link href={"/"} className="md:flex hidden">
            <Image
              src="/images/logo-icon.png"
              alt="Our Office"
              height={60}
              width={60}
            />
          </Link>
        ) : (
          ""
        )}

        <Menu showAllMenu={lastScrollY} setShowAllMenu={setShowAllMenu} />

        <div className="hidden lg:block">
          <SearchBar hasScrolled={true} />
        </div>

        {mobileMenu && (
          <MenuMobile
            showAllMenu={showAllMenu}
            setShowAllMenu={setShowAllMenu}
            setMobileMenu={setMobileMenu}
          />
        )}

        <div className="flex items-center gap-2 text-black md:hidden">
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-[white]/[0.5] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <IoClose
                className="text-[25px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[25px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
