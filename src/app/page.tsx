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
          <li>
            <a href="/" className="font-lora text-white font-normal px-4 py-2 rounded-full hover:bg-white/20 transition flex items-center gap-2">
              <IoMdHome size={24} color="#cf6a17" />
            </a>
          </li>
          <li>
            <a href="/movies" className="font-lora text-white font-normal px-4 py-2 rounded-full hover:bg-white/20 transition flex items-center gap-2">
              <TfiVideoClapper size={20} color="#000" /> MOVIES
            </a>
          </li>
          <li>
            <a href="/webseries" className="font-lora text-white font-normal px-4 py-2 rounded-full hover:bg-white/20 transition flex items-center gap-2">
              <IoVideocam size={22} color="#FF00FF" /> WEB-SERIES
            </a>
          </li>
          <li>
            <a href="/new-popular" className="font-lora text-white font-normal px-4 py-2 rounded-full hover:bg-white/20 transition flex items-center gap-2">
              <GoStarFill size={22} color="#FFD700" /> NEW & POPULAR
            </a>
          </li>
          <li>
            <a href="/profile" className="font-lora text-white font-normal px-4 py-2 rounded-full hover:bg-white/20 transition flex items-center gap-2">
              <RiAccountCircleFill size={26} color="#3b17cf" />
            </a>
          </li>
        </ul>
      </nav>
      <main className="relative flex min-h-screen flex-col items-center justify-between p-24 bg-black">
        {/* Blurred background image from top to bottom before featured movies */}
        <div className="absolute top-0 left-0 w-full h-[700px] z-0">
          <img src="/c1.jpg" alt="Background" className="w-full h-full object-cover blur-[4px] brightness-75" />
        </div>
        <div className="relative flex flex-col items-center w-full mt-20 z-10">
          <img src="/logo.png" alt="Logo" className="mx-auto mb-6 w-32 h-32 object-contain" />
          <h1 className="text-8xl font-bold text-white">SCREEN  BOX</h1>
          <br></br>
          <h2 className="text-2xl text-white">nothing to pay, Enjoy !</h2>
        </div>
        {/* Filmstrip/Carousel for movies */}
        <section className="relative w-full mt-12 z-10">
          <h3 className="text-3xl font-bold text-white mb-6 ml-4">Featured Movies</h3>
          <div className="flex overflow-x-auto gap-6 px-4 pb-4 hide-scrollbar">
            {[{
              title: "Inception",
              genre: "Sci-Fi",
              year: 2010,
              img: "/android-icon-144x144.png",
              desc: "A thief who steals corporate secrets through dream-sharing technology."
            },{
              title: "Interstellar",
              genre: "Adventure",
              year: 2014,
              img: "/android-icon-192x192.png",
              desc: "A team travels through a wormhole in space in an attempt to ensure humanity's survival."
            },{
              title: "The Dark Knight",
              genre: "Action",
              year: 2008,
              img: "/android-icon-72x72.png",
              desc: "Batman faces the Joker, a criminal mastermind who plunges Gotham into chaos."
            },{
              title: "Avatar",
              genre: "Fantasy",
              year: 2009,
              img: "/android-icon-96x96.png",
              desc: "A paraplegic Marine dispatched to Pandora becomes torn between following orders and protecting the world."
            },{
              title: "Titanic",
              genre: "Romance",
              year: 1997,
              img: "/android-icon-48x48.png",
              desc: "A love story unfolds on the ill-fated RMS Titanic."
            }].map((movie, idx) => (
              <div key={idx} className="relative min-w-[200px] h-[320px] bg-white/10 rounded-xl shadow-lg flex flex-col items-center justify-center border border-white/20 group">
                <img src={movie.img} alt={movie.title} className="w-32 h-40 object-cover rounded-lg mb-4" />
                <span className="text-lg font-semibold text-white">{movie.title}</span>
                <span className="text-sm text-gray-300">{movie.genre} • {movie.year}</span>
                {/* Details on hover */}
                <div className="absolute inset-0 bg-black/80 rounded-xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-white">
                  <span className="text-lg font-bold mb-2">{movie.title}</span>
                  <span className="text-sm mb-2">{movie.genre} • {movie.year}</span>
                  <span className="text-xs text-center">{movie.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}