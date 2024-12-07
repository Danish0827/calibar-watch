"use client";
import { BrandData, fetchBrandsData } from "@/utils/ApiUtils";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp, FaPlus } from "react-icons/fa";
import { HiOutlineChevronDown } from "react-icons/hi";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import { TiArrowShuffle } from "react-icons/ti";

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

interface MenuMobileProps {
  showAllMenu: boolean;
  setShowAllMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuMobile: React.FC<MenuMobileProps> = ({
  showAllMenu,
  setShowAllMenu,
  setMobileMenu,
}) => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
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

  const toggleCategory = (categoryId: number, event: React.MouseEvent) => {
    event.stopPropagation();
    if (activeCategory === categoryId) {
      setActiveCategory(null);
    } else {
      setActiveCategory(categoryId);
    }
  };

  const handleMenuClick = (id: number) => {
    setActiveMenu(activeMenu === id ? null : id);
    setShowAllMenu(!showAllMenu);
  };

  const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    {
      id: 3,
      name: "Products",
      // subMenu: true,
      url: "/our-products",
      subMenuData: [
        {
          id: 1,
          name: "Watch 1",
          innerPages: [
            { id: 1, name: "Product A", url: "/products/watch-1/product-a" },
            { id: 2, name: "Product B", url: "/products/watch-1/product-b" },
            { id: 3, name: "Product C", url: "/products/watch-1/product-c" },
          ],
        },
        {
          id: 2,
          name: "Watch 2",
          innerPages: [
            { id: 1, name: "Product D", url: "/products/watch-2/product-d" },
            { id: 2, name: "Product E", url: "/products/watch-2/product-e" },
          ],
        },
      ],
    },
    { id: 4, name: "Catalogue", url: "/catalogue" },
    {
      id: 5,
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
    // { id: 6, name: "Sales", url: "/sales" },
    { id: 7, name: "Contact", url: "/contact" },
  ];

  return (
    <ul className="flex flex-col md:hidden font-semibold font-sans absolute top-[70px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {item.subMenu ? (
              <li
                className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                onClick={() => handleMenuClick(item.id)}
              >
                <div className="flex justify-between items-center">
                  <span>{item.name}</span>
                  {activeMenu === item.id ? (
                    <FaChevronUp size={14} />
                  ) : (
                    <FaChevronDown size={14} />
                  )}
                </div>

                {activeMenu === item.id && (
                  <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                    {item.subMenuData.map((category: SubMenu) => (
                      <li key={category.id} className="border-t">
                        <Link href={category.url || "/"}>
                          <div
                            className="flex items-center cursor-pointer py-2 px-5"
                            onClick={(event) =>
                              toggleCategory(category.id, event)
                            }
                          >
                            <TiArrowShuffle
                              className={`mr-2 transition-transform ${
                                activeCategory === category.id
                                  ? "rotate-45"
                                  : ""
                              }`}
                              size={14}
                            />
                            <span className="font-semibold">
                              {category.name}
                            </span>
                          </div>
                        </Link>
                        {category.innerPages &&
                          activeCategory === category.id && (
                            <ul>
                              {category.innerPages.map((subItem) => (
                                <Link
                                  key={subItem.id}
                                  href={subItem.url}
                                  onClick={() => {
                                    setShowAllMenu(false);
                                    setMobileMenu(false);
                                  }}
                                >
                                  <li className="py-2 px-8 border-t flex gap-1 items-center">
                                    <MdSubdirectoryArrowRight />
                                    {subItem.name}
                                  </li>
                                </Link>
                              ))}
                            </ul>
                          )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li className="py-4 px-5 border-b">
                <Link
                  href={item.url ?? ""}
                  onClick={() => setMobileMenu(false)}
                >
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
