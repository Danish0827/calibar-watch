"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsChevronDown } from "react-icons/bs";
import { TiArrowShuffle } from "react-icons/ti";
import { BrandData, fetchBrandsData } from "@/utils/ApiUtils";
import { Search } from "lucide-react";

interface InnerPage {
  id: number;
  name: string;
  url: string;
}

interface SubMenu {
  id: number;
  name: string;
  url?: string;
  innerPages?: InnerPage[];
}

interface MenuProps {
  showAllMenu: boolean;
  setShowAllMenu: (show: boolean) => void;
}

const Menu = ({ showAllMenu }: any) => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
  const [brands, setBrands] = useState<BrandData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { brands } = await fetchBrandsData(1);
        setBrands(brands);
      } catch (error) {
        console.error("Error fetching brands:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const menuData = [
    { id: 1, name: "Home", url: "/" },
    {
      id: 2,
      name: "Brands",
      subMenu: true,
      url: "/brands",
      subMenuData: loading
        ? []
        : brands.map((brand) => ({
            id: brand.id,
            name: brand.name,
            url: brand.slug ? `/brands/${brand.slug}` : "/",
          })),
    },
    { id: 3, name: "About", url: "/about" },
    { id: 4, name: "Contact", url: "/contact" },
  ];

  const menu = showAllMenu
    ? menuData.filter((item) => item.id !== 1)
    : menuData;

  return (
    <ul className="hidden md:flex items-center gap-8 font-sm text-black">
      {menu.map((item) => (
        <MenuItem
          key={item.id}
          item={item}
          pathname={pathname}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          activeSubMenu={activeSubMenu}
          setActiveSubMenu={setActiveSubMenu}
        />
      ))}
    </ul>
  );
};

interface MenuItemProps {
  item: any;
  pathname: string;
  activeMenu: number | null;
  setActiveMenu: (id: number | null) => void;
  activeSubMenu: number | null;
  setActiveSubMenu: (id: number | null) => void;
}

const MenuItem = ({
  item,
  pathname,
  activeMenu,
  setActiveMenu,
  activeSubMenu,
  setActiveSubMenu,
}: MenuItemProps) => {
  const isActive = pathname === item.url;

  return item.subMenu ? (
    <li
      className={`flex items-center text-xl gap-1 font-medium uppercase cursor-pointer hover:border-b-2 border-bgMain4 hover:bg-bgMain4 p-5 transition-transform ease-in text-bgMain4 hover:text-white ${
        isActive ? "text-[#f3f3f3] border-b-2 border-bgMain4" : ""
      }`}
      onMouseEnter={() => setActiveMenu(item.id)}
      onMouseLeave={() => {
        setActiveMenu(null);
        setActiveSubMenu(null);
      }}
    >
      {item.name}
      <BsChevronDown size={14} />
      {activeMenu === item.id && item.subMenuData && (
        <SubMenuList
          subMenuData={item.subMenuData}
          activeSubMenu={activeSubMenu}
          setActiveSubMenu={setActiveSubMenu}
        />
      )}
    </li>
  ) : (
    <li
      className={`cursor-pointer hover:border-b-2 text-xl gap-1 font-medium uppercase border-bgMain3 hover:bg-bgMain4 p-5 transition-transform ease-in text-bgMain4 hover:text-white ${
        isActive
          ? "text-[#f3f3f3] border-b-2 border-bgMain4 -mt-2 hover:-mt-0"
          : ""
      }`}
    >
      <Link href={item.url}>{item.name}</Link>
    </li>
  );
};

interface SubMenuListProps {
  subMenuData: SubMenu[];
  activeSubMenu: number | null;
  setActiveSubMenu: (id: number | null) => void;
}

const SubMenuList = ({
  subMenuData,
  activeSubMenu,
  setActiveSubMenu,
}: SubMenuListProps) => (
  <ul className="bg-white absolute top-[68px] min-w-[256px] px-2 py-1 text-black shadow-lg z-10">
    {subMenuData.map((submenu) => (
      <li
        key={submenu.id}
        className="relative"
        onMouseEnter={() => setActiveSubMenu(submenu.id)}
        onMouseLeave={() => setActiveSubMenu(null)}
      >
        <Link
          href={submenu.url || "/"}
          className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.05] rounded-md"
        >
          {submenu.name}
          <TiArrowShuffle size={18} color="black" />
        </Link>
        {submenu.innerPages && activeSubMenu === submenu.id && (
          <InnerPagesList innerPages={submenu.innerPages} />
        )}
      </li>
    ))}
  </ul>
);

interface InnerPagesListProps {
  innerPages: InnerPage[];
}

const InnerPagesList = ({ innerPages }: InnerPagesListProps) => (
  <div className="absolute left-full top-0 w-[250px] bg-white rounded-[3px] shadow-lg">
    <ul className="py-2">
      {innerPages.map((page) => (
        <li key={page.id} className="px-4 py-2">
          <Link
            href={page.url}
            className="text-black hover:text-gray-600 py-2.5 hover:pl-0.5 transition-all ease-linear"
          >
            {page.name}
          </Link>
        </li>
      ))}
      <li className="px-4 py-2">
        <Link
          href=""
          className="text-black hover:text-gray-600 py-2.5 hover:pl-0.5 transition-all ease-linear"
        >
          <Search size={20} strokeWidth={1.5} className="text-templateText" />
        </Link>
      </li>
    </ul>
  </div>
);

export default Menu;
