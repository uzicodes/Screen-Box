"use client";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  const streamingLogos = [
    { name: "Disney", src: "/carousel/disney.svg" },
    { name: "HBO", src: "/carousel/hbo.png" },
    { name: "Hulu", src: "/carousel/hulu.svg" },
    { name: "Netflix", src: "/carousel/netflix.svg" },
    { name: "Paramount", src: "/carousel/paramount.svg" },
    { name: "Apple", src: "/carousel/apple.svg" }
  ];

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
          
          <Link
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
          </Link>
        </div>

        {/* Rolling Carousel of Streaming Logos */}
  <section className="relative w-full mt-40 z-10 overflow-hidden">
          <div className="flex items-center">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {streamingLogos.map((logo, idx) => (
                <div key={`first-${idx}`} className="flex-shrink-0 mx-8">
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className={`${logo.name === 'HBO' ? 'h-14' : logo.name === 'Hulu' ? 'h-8' : 'h-10'} w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300${logo.name === 'Apple' ? ' filter invert' : ''}`}
                    style={logo.name === 'Hulu' ? { filter: 'brightness(0) saturate(100%) invert(70%) sepia(100%) saturate(500%) hue-rotate(80deg) brightness(1.2)' } : {}}
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {streamingLogos.map((logo, idx) => (
                <div key={`second-${idx}`} className="flex-shrink-0 mx-8">
                  <img 
                    src={logo.src} 
                    alt={logo.name} 
                    className={`${logo.name === 'HBO' ? 'h-14' : logo.name === 'Hulu' ? 'h-8' : 'h-10'} w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300${logo.name === 'Apple' ? ' filter invert' : ''}`}
                    style={logo.name === 'Hulu' ? { filter: 'brightness(0) saturate(100%) invert(70%) sepia(100%) saturate(500%) hue-rotate(80deg) brightness(1.2)' } : {}}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filmstrip/Carousel for movies */}
  <section className="relative w-full mt-24 z-10">
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

        {/* Trending Now */}
  <section className="relative w-full mt-12 z-10">
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

        {/* Popular this Month */}
  <section className="relative w-full mt-12 z-10">
          <h3 className="text-3xl font-bold text-white mb-6 ml-4">Popular this Month</h3>
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

        {/* Recently Added */}
  <section className="relative w-full mt-12 z-10">
          <h3 className="text-3xl font-bold text-white mb-6 ml-4">Featured Web-series</h3>
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
        
        {/* Footer Navbar - now handled globally in layout */}
      </main>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {/* Contact Links */}
      <footer className="w-full flex flex-col items-center mt-12 mb-4 z-20">
        <div className="flex gap-6">
          <a href="https://github.com/uzicodes" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-lg font-semibold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.396.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
            GitHub
          </a>
          <a href="https://instagram.com/utsh0x" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 text-lg font-semibold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a6.25 6.25 0 1 1-6.25 6.25a6.25 6.25 0 0 1 6.25-6.25zm0 1.5a4.75 4.75 0 1 0 4.75 4.75a4.75 4.75 0 0 0-4.75-4.75zm6.5 1.25a1.25 1.25 0 1 1-1.25 1.25a1.25 1.25 0 0 1 1.25-1.25z"/></svg>
            Instagram
          </a>
          <a href="https://www.linkedin.com/in/utsho-heaven-chowdhury/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-lg font-semibold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
            LinkedIn
          </a>
          <a href="mailto:utshozi11@gmail.com" className="text-white hover:text-blue-400 text-lg font-semibold flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20V8.99l7.29 6.71c.39.36 1.02.36 1.41 0L20 8.99V20H4z"/></svg>
            utshozi11@gmail.com
          </a>
        </div>
      </footer>
    </>
  );
}