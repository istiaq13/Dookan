"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useEffect, useRef, useState } from "react";

export default function AdminLayout({children}) {
  const [isOpen, setisOpen] = useState(false);
  const pathname = usePathname();
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setisOpen(!isOpen);
  }; 

  useEffect(() => {
    toggleSidebar();
  }, [pathname]);

  useEffect(() => {
    function handleClickOutsideEvent(event) {
      if (sidebarRef.current && !sidebarRef?.current?.contains(event.target)) {
        setisOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutsideEvent);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideEvent);
    }
  }, []);  

  return (
    <main className="relative flex"> 
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <div 
        ref={sidebarRef}
        className={`fixed md:hidden ease-in-out transition-all duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-[260px]"}`}>
        <Sidebar />
      </div>
    <section className="flex-1 flex flex-col min-h-screen">
        <Header toggleSidebar = {toggleSidebar}/>
      <section className="flex-1 bg[#eff3f4]">
        {children}
      </section>  
    </section>
    </main>
  );
}