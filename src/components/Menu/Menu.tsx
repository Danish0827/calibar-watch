"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsChevronDown } from "react-icons/bs";
import { TiArrowShuffle } from "react-icons/ti";
import { Search } from "lucide-react";
import { BrandData, fetchBrandsData } from "@/utils/ApiUtils";

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
}

const Menu: React.FC<MenuProps> = ({ showAllMenu }) => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [brands, setBrands] = useState<BrandData[]>([]);

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

  const menuItems = showAllMenu
    ? menuData.filter((item) => item.id !== 1)
    : menuData;

  return (
    <ul className="hidden md:flex items-center gap-8 font-sm text-black">
      {menuItems.map((item) => (
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

const MenuItem: React.FC<MenuItemProps> = ({
  item,
  pathname,
  activeMenu,
  setActiveMenu,
  activeSubMenu,
  setActiveSubMenu,
}) => {
  const isActive = pathname === item.url;

  const handleMouseEnter = () => setActiveMenu(item.id);
  const handleMouseLeave = () => {
    setActiveMenu(null);
    setActiveSubMenu(null);
  };

  return item.subMenu ? (
    <div className="group hover:bg-bgMain4 hover:text-white">
      <li
        className={`flex items-center lg:text-xl gap-1 font-medium uppercase mx-3 cursor-pointer border-[80%] hover:border-b-2 border-bgMain4 group-hover:border-white hover:bg-bgMain4 px-2 py-2 lg:px-3 lg:py-5 transition-transform ease-in text-bgMain4 group-hover:text-white ${
          isActive ? "text-[#f3f3f3] border-b-2 border-bgMain4" : ""
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
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
    </div>
  ) : (
    <Link href={item.url}>
      <div className="group hover:bg-bgMain4 hover:text-white">
        <li
          className={`cursor-pointer hover:border-b-2 lg:text-xl gap-1 font-medium uppercase border-bgMain3 group-hover:border-white hover:bg-bgMain4 px-2 py-2 lg:px-3 lg:py-5 mx-3 transition-transform ease-in text-bgMain4 group-hover:text-white ${
            isActive ? "text-[#f3f3f3] border-b-2 border-bgMain4 " : ""
          }`}
        >
          {item.name}
        </li>
      </div>
    </Link>
  );
};

interface SubMenuListProps {
  subMenuData: SubMenu[];
  activeSubMenu: number | null;
  setActiveSubMenu: (id: number | null) => void;
}

const SubMenuList: React.FC<SubMenuListProps> = ({
  subMenuData,
  activeSubMenu,
  setActiveSubMenu,
}) => (
  <ul className="bg-white absolute top-[70px] min-w-[256px] px-2 py-1 text-black shadow-lg z-10">
    {subMenuData.map((submenu) => (
      <li
        key={submenu.id}
        className="relative"
        onMouseEnter={() => setActiveSubMenu(submenu.id)}
        onMouseLeave={() => setActiveSubMenu(null)}
      >
        <Link
          href={submenu.url || "/"}
          className="h-12 flex text-base justify-between items-center px-3 hover:bg-black/[0.05] rounded-md"
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

const InnerPagesList: React.FC<InnerPagesListProps> = ({ innerPages }) => (
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
