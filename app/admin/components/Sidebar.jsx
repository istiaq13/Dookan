"use client";

import { Building2, LayoutDashboard, LibraryBig, List, ShoppingBasket, ShoppingCart, Star, User } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
    const menuList = [
        { 
          name: "Dashboard", 
          link: "/admin",
          icon: <LayoutDashboard className="h-5 w-5"/>
        },
        { 
          name: "Products", 
          link: "/admin/products",
          icon: <ShoppingBasket className="h-5 w-5"/>
        },
        { 
          name: "Orders", 
          link: "/admin/orders",
          icon: <ShoppingCart className="h-5 w-5"/>
        },
        { 
          name: "Categories", 
          link: "/admin/categories",
          icon: <List className="h-5 w-5"/>
        },
        { 
          name: "Brands", 
          link: "/admin/brands",
          icon: <Building2 className="h-5 w-5"/>
        },
        { 
          name: "Customers", 
          link: "/admin/customers",
          icon: <User className="h-5 w-5"/>
        },
        { 
          name: "Reviews", 
          link: "/admin/reviews",
          icon: <Star className="h-5 w-5"/>
        },
        { 
          name: "Collections", 
          link: "/admin/collections",
          icon: <LibraryBig className="h-5 w-5"/>
        }
    ];
    return (
        <section className="flex flex-col gap-10 bg-white border-r px-5 py-3 h-screen overflow-hidden md:w-[260px]">
          <div className="flex justify-center">
            <img className="h-8" src="/logo.png" alt="Logo"/>
          </div>  
            <ul className="flex-1 flex flex-col gap-4">
                {menuList?.map((item) => {
                    return (
                        <Link href={item.link}>
                            <li className="flex items-center gap-3 px-4 py-2 rounded-xl font-semibold">
                              {item?.icon}
                              {item?.name}
                            </li>
                        </Link>
                    )    
                })}
            </ul>
        </section>    
    );
}