"use client";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
  <main className="relative flex min-h-screen flex-col items-center justify-between p-24 font-cinzel" style={{ background: 'linear-gradient(to bottom, transparent 700px, #001220 700px, #001220 100%)' }}>
        {/* Blurred background image from top to bottom before featured movies */}
        <div className="absolute top-0 left-0 w-full h-[700px] z-0">
          <img src="/c1.jpg" alt="Background" className="w-full h-full object-cover blur-[4px] brightness-75" />
        </div>

        {/* Conic gradient section directly below blurred image */}
        <div className="w-full h-32 bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-[#1d4ed8] via-[#1e40af] to-[#111827]" />
  <div className="relative flex flex-col items-center w-full mt-0 z-10">
          <img src="/logo.png" alt="Logo" className="mx-auto mb-6 w-32 h-32 object-contain" />
          <h1 className="text-8xl font-bold text-white" style={{fontFamily: 'Maragsa Display, sans-serif'}}>SCREEN  BOX</h1>
          <br></br>
          <h2 className="text-2xl text-white" style={{fontFamily: 'Maragsa Display, sans-serif'}}>nothing to pay, Enjoy !</h2>
          {/* Login Button */}
          {/* Login Button with redirect */}
          {/* Add useRouter for navigation */}
          <a
            href="/login"
            style={{
              cursor: 'pointer',
              fontWeight: 700,
              transition: 'all 0.2s',
              padding: '10px 20px',
              borderRadius: '100px',
              background: '#cfef00',
              border: '1px solid transparent',
              display: 'flex',
              alignItems: 'center',
              fontSize: '15px',
              marginTop: '24px',
              textDecoration: 'none',
              color: 'black',
            }}
            onMouseOver={e => (e.currentTarget.style.background = '#c4e201')}
            onMouseOut={e => (e.currentTarget.style.background = '#cfef00')}
            onMouseDown={e => (e.currentTarget.style.transform = 'scale(0.95)')}
            onMouseUp={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Login
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              style={{ width: '34px', marginLeft: '10px', transition: 'transform 0.3s ease-in-out' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </a>
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

        {/* Dummy Section 1 - Trending Now */}
        <section className="relative w-full mt-24 z-10">
          <h3 className="text-3xl font-bold text-white mb-6 ml-4">Trending Now</h3>
          <div className="flex overflow-x-auto gap-6 px-4 pb-4 hide-scrollbar">
            {[{
              title: "Dummy Movie 1",
              genre: "Action",
              year: 2022,
              img: "/android-icon-144x144.png",
              desc: "Description for Dummy Movie 1."
            },{
              title: "Dummy Movie 2",
              genre: "Drama",
              year: 2023,
              img: "/android-icon-192x192.png",
              desc: "Description for Dummy Movie 2."
            },{
              title: "Dummy Movie 3",
              genre: "Comedy",
              year: 2021,
              img: "/android-icon-72x72.png",
              desc: "Description for Dummy Movie 3."
            },{
              title: "Dummy Movie 4",
              genre: "Horror",
              year: 2020,
              img: "/android-icon-96x96.png",
              desc: "Description for Dummy Movie 4."
            },{
              title: "Dummy Movie 5",
              genre: "Sci-Fi",
              year: 2024,
              img: "/android-icon-48x48.png",
              desc: "Description for Dummy Movie 5."
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

        {/* Dummy Section 2 - Recommended For You */}
        <section className="relative w-full mt-24 z-10">
          <h3 className="text-3xl font-bold text-white mb-6 ml-4">Recommended For You</h3>
          <div className="flex overflow-x-auto gap-6 px-4 pb-4 hide-scrollbar">
            {[{
              title: "Dummy Rec 1",
              genre: "Adventure",
              year: 2022,
              img: "/android-icon-144x144.png",
              desc: "Description for Dummy Rec 1."
            },{
              title: "Dummy Rec 2",
              genre: "Romance",
              year: 2023,
              img: "/android-icon-192x192.png",
              desc: "Description for Dummy Rec 2."
            },{
              title: "Dummy Rec 3",
              genre: "Thriller",
              year: 2021,
              img: "/android-icon-72x72.png",
              desc: "Description for Dummy Rec 3."
            },{
              title: "Dummy Rec 4",
              genre: "Fantasy",
              year: 2020,
              img: "/android-icon-96x96.png",
              desc: "Description for Dummy Rec 4."
            },{
              title: "Dummy Rec 5",
              genre: "Documentary",
              year: 2024,
              img: "/android-icon-48x48.png",
              desc: "Description for Dummy Rec 5."
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

        {/* Dummy Section 3 - Recently Added */}
        <section className="relative w-full mt-24 z-10">
          <h3 className="text-3xl font-bold text-white mb-6 ml-4">Recently Added</h3>
          <div className="flex overflow-x-auto gap-6 px-4 pb-4 hide-scrollbar">
            {[{
              title: "Dummy New 1",
              genre: "Mystery",
              year: 2022,
              img: "/android-icon-144x144.png",
              desc: "Description for Dummy New 1."
            },{
              title: "Dummy New 2",
              genre: "Biography",
              year: 2023,
              img: "/android-icon-192x192.png",
              desc: "Description for Dummy New 2."
            },{
              title: "Dummy New 3",
              genre: "Crime",
              year: 2021,
              img: "/android-icon-72x72.png",
              desc: "Description for Dummy New 3."
            },{
              title: "Dummy New 4",
              genre: "Animation",
              year: 2020,
              img: "/android-icon-96x96.png",
              desc: "Description for Dummy New 4."
            },{
              title: "Dummy New 5",
              genre: "Family",
              year: 2024,
              img: "/android-icon-48x48.png",
              desc: "Description for Dummy New 5."
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