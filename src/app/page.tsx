import { IoMdHome } from "react-icons/io";
import { TfiVideoClapper } from "react-icons/tfi";
import { GoStarFill } from "react-icons/go";
import { IoVideocam } from "react-icons/io5";
import { RiAccountCircleFill } from "react-icons/ri";

export default function Home() {
  return (
    <>
  <nav className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center bg-white/10 backdrop-blur-lg rounded-full px-8.5 py-1 shadow-lg border border-white/20 w-[650px] h-14">
        <ul className="flex gap-3 flex-nowrap">
          <li><button className="font-lora text-white font-normal px-4 py-2 rounded-full hover:bg-white/20 transition flex items-center gap-2"><IoMdHome size={24} color="#cf6a17" /></button></li>
          <li><button className="font-lora text-white font-normal px-4 py-2 rounded-full hover:bg-white/20 transition flex items-center gap-2"><TfiVideoClapper size={20} color="#000" /> MOVIES</button></li>
          <li><button className="font-lora text-white font-normal px-4 py-2 rounded-full hover:bg-white/20 transition flex items-center gap-2"><IoVideocam size={22} color="#FF00FF" /> WEB-SERIES</button></li>
          <li><button className="font-lora text-white font-normal px-4 py-2 rounded-full hover:bg-white/20 transition flex items-center gap-2"><GoStarFill size={22} color="#FFD700" /> NEW & POPULAR</button></li>
          <li><button className="font-lora text-white font-normal px-4 py-2 rounded-full hover:bg-white/20 transition flex items-center gap-2"><RiAccountCircleFill size={26} color="#3b17cf" /></button></li>
        </ul>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2dd4bf] to-[#1f2937]">
        <div className="flex flex-col items-center w-full mt-20">
          <img src="/logo.png" alt="Logo" className="mx-auto mb-6 w-32 h-32 object-contain" />
          <h1 className="text-8xl font-bold">SCREEN  BOX</h1>
          <br></br>
          <h2 className="text-2xl">nothing to pay, Enjoy !</h2>
        </div>
      </main>
    </>
  );
}