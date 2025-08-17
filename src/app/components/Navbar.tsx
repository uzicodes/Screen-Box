"use client";
import { IoMdHome } from "react-icons/io";
import { TfiVideoClapper } from "react-icons/tfi";
import { GoStarFill } from "react-icons/go";
import { IoVideocam } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center bg-white/10 backdrop-blur-lg rounded-full px-8.5 py-1 shadow-lg border border-white/20 w-[650px] h-14">
      <ul className="flex gap-3 flex-nowrap">
        <li>
          <Link href="/" className="font-lora text-white font-normal px-4 py-2 rounded-full hover:bg-white/20 transition flex items-center gap-2">
            <IoMdHome size={24} color="#cf6a17" />
          </Link>
        </li>
        <li>
          <Link href="/movies" className={`font-lora text-white font-normal px-4 py-2 rounded-full hover:bg-white/20 transition flex items-center gap-2 ${pathname === "/movies" ? "border-b-2 border-[#cf6a17]" : ""}`}>
            <TfiVideoClapper size={20} color="#000" /> MOVIES
          </Link>
        </li>
        <li>
          <Link href="/web_series" className={`font-lora text-white font-normal px-4 py-2 rounded-full hover:bg-white/20 transition flex items-center gap-2 ${pathname === "/web_series" ? "border-b-2 border-[#cf6a17]" : ""}`}>
            <IoVideocam size={22} color="#FF00FF" /> WEB-SERIES
          </Link>
        </li>
        <li>
          <Link href="/new_popular" className={`font-lora text-white font-normal px-4 py-2 rounded-full hover:bg-white/20 transition flex items-center gap-2 ${pathname === "/new_popular" ? "border-b-2 border-[#cf6a17]" : ""}`}>
            <GoStarFill size={22} color="#FFD700" /> NEW & POPULAR
          </Link>
        </li>
        <li>
          <Link href="/profile" className={`font-lora text-white font-normal px-4 py-2 rounded-full hover:bg-white/20 transition flex items-center gap-2 ${pathname === "/profile" ? "border-b-2 border-[#cf6a17]" : ""}`}>
            <RiAccountCircleFill size={26} color="#27B7F5" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
