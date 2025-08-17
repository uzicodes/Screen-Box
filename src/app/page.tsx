
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
  <main className="relative flex min-h-screen flex-col items-center justify-between p-24 bg-black">
        {/* Blurred background image from top to bottom before featured movies */}
        <div className="absolute top-0 left-0 w-full h-[700px] z-0">
          <img src="/c1.jpg" alt="Background" className="w-full h-full object-cover blur-[4px] brightness-75" />
        </div>

        {/* Conic gradient section directly below blurred image */}
        <div className="w-full h-32 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#1d4ed8] via-[#1e40af] to-[#111827]" />
  <div className="relative flex flex-col items-center w-full mt-0 z-10">
          <img src="/logo.png" alt="Logo" className="mx-auto mb-6 w-32 h-32 object-contain" />
          <h1 className="text-8xl font-bold text-white">SCREEN  BOX</h1>
          <br></br>
          <h2 className="text-2xl text-white">nothing to pay, Enjoy !</h2>
        </div>
        {/* Filmstrip/Carousel for movies */}
  <section className="relative w-full mt-48 z-10">
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

        {/* Dummy Section 1 */}
        <section className="relative w-full py-16 bg-white/5 z-10 border-t border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4 ml-4">Trending Now</h3>
          <div className="flex gap-6 px-4 overflow-x-auto hide-scrollbar">
            {[1,2,3,4,5].map((item) => (
              <div key={item} className="min-w-[180px] h-[220px] bg-white/10 rounded-xl shadow flex flex-col items-center justify-center border border-white/20">
                <span className="text-lg font-semibold text-white">Trending {item}</span>
                <span className="text-sm text-gray-300">Category</span>
              </div>
            ))}
          </div>
        </section>

        {/* Dummy Section 2 */}
        <section className="relative w-full py-16 bg-white/10 z-10 border-t border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4 ml-4">Recommended For You</h3>
          <div className="flex gap-6 px-4 overflow-x-auto hide-scrollbar">
            {[1,2,3,4,5].map((item) => (
              <div key={item} className="min-w-[180px] h-[220px] bg-white/10 rounded-xl shadow flex flex-col items-center justify-center border border-white/20">
                <span className="text-lg font-semibold text-white">Recommended {item}</span>
                <span className="text-sm text-gray-300">Genre</span>
              </div>
            ))}
          </div>
        </section>

        {/* Dummy Section 3 */}
        <section className="relative w-full py-16 bg-white/5 z-10 border-t border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4 ml-4">Recently Added</h3>
          <div className="flex gap-6 px-4 overflow-x-auto hide-scrollbar">
            {[1,2,3,4,5].map((item) => (
              <div key={item} className="min-w-[180px] h-[220px] bg-white/10 rounded-xl shadow flex flex-col items-center justify-center border border-white/20">
                <span className="text-lg font-semibold text-white">New {item}</span>
                <span className="text-sm text-gray-300">Year</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}