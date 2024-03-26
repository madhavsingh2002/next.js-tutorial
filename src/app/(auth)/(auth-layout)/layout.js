"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import './style.css';
const navLinks=[
  {name:"Register",href:"/register"},
  {name:"Login",href:"/login"},
  {name:"Forget Password",href:"/forget-password"},
]
export default function AuthLayout({ children }) {
  const pathname = usePathname();
 
    return (
        <>
        {navLinks.map((link)=>{
           const isActive = pathname.startsWith(link.href)
          return (
            <Link href={link.href} key={link.name}
            className={isActive?"font-bold mr-4":"text-red-500 mr-4"}
            >
              {link.name}
            </Link>
          )
        })}
          {children}
          </>
    );
  }
  