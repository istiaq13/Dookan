import Link from "next/link";

export default function Header() {
    const menuList = [
        {
            name: "Home", 
            link: "/" 
        },
        {
            name: "About Us", 
            link: "/about-us" 
        },
        {
            name: "Home", 
            link: "/" 
        },
        {
            name: "Contact Us", 
            link: "/contact-us" 
        },
    ];
    return (
        <nav className="py-4 px-14 border-b flex items-center justify-between">
          <img className="h-9" src="/logo.png" alt="Logo" />
          <div className="flex items-center gap-4 font-semibold">
            {menuList?.map((item) => {
                return (
                    <Link href={item.link}>
                        <button>{item?.name}</button>
                    </Link>
                );
            })}
          </div>
          <Link href="/login">
            <button className="bg-blue-600 text-white px-5 font-bold py-2 rounded-full">
              Login
            </button>
          </Link>  
        </nav>
    );
} 