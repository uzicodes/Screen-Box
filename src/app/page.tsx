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
          <img src="/logo.png" alt="Logo" className="mx-auto mb-6 w-32 h-32 object-contain -mt-16" />
          <h1 className="text-8xl font-bold text-white -mt-3" style={{fontFamily: 'Maragsa Display, sans-serif'}}>SCREEN  BOX</h1>
          <br></br>
                <h2 className="text-2xl text-white" style={{fontFamily: 'Lora, serif'}}>nothing to pay, Enjoy !</h2>


          {/* Transparent Search Bar with Arrow Icon */}

          <form className="relative mt-6 mb-2 w-full max-w-xs" onSubmit={e => { e.preventDefault(); }}>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-6 py-0.5 pr-12 rounded-full bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg shadow-lg backdrop-blur-sm border border-white/30 font-lora"
              style={{ fontFamily: 'Lora, serif', fontWeight: 400 }}
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white opacity-80 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 5l8 7-8 7" />
              </svg>
            </span>
          </form>
          
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
              marginTop: '12px',
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
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3v1" />
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
            {[
              {
                title: "Inception",
                genre: "Sci-Fi",
                year: 2010,
                img: "https://socazxtaswqtseqkcofl.supabase.co/storage/v1/object/sign/Posters/movies/inception.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82MTljMGYyNS00ZmYzLTQ2YjMtYmRhNi05Zjg3MTU5MTI0OWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3N0ZXJzL21vdmllcy9pbmNlcHRpb24uanBnIiwiaWF0IjoxNzU4MDE1NDkxLCJleHAiOjIzODg3MzU0OTF9.GQmbMaH4HR5xfQQP4DgA0qvbznJxaBUvcLce4VuoHks",
                desc: "A thief who steals corporate secrets through dream-sharing technology."
              },
              {
                title: "Interstellar",
                genre: "Adventure",
                year: 2014,
                img: "https://socazxtaswqtseqkcofl.supabase.co/storage/v1/object/sign/Posters/movies/interstellar.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82MTljMGYyNS00ZmYzLTQ2YjMtYmRhNi05Zjg3MTU5MTI0OWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3N0ZXJzL21vdmllcy9pbnRlcnN0ZWxsYXIuanBnIiwiaWF0IjoxNzU4MDExMTk2LCJleHAiOjIzODg3MzExOTZ9.0oEFa64GbIIMcKB3ZdDAUsILEpyMq7K4hJv61X1oHcE",
                desc: "A team travels through a wormhole in space in an attempt to ensure humanity's survival."
              },
              {
                title: "Parasite",
                genre: "Thriller",
                year: 2019,
                img: "https://socazxtaswqtseqkcofl.supabase.co/storage/v1/object/sign/Posters/movies/parasite.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82MTljMGYyNS00ZmYzLTQ2YjMtYmRhNi05Zjg3MTU5MTI0OWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3N0ZXJzL21vdmllcy9wYXJhc2l0ZS5qcGciLCJpYXQiOjE3NTgwMTUwNTEsImV4cCI6MjM4ODczNTA1MX0.29kGF14_1ekaDXOx0ZJmiyVZZF6Ias1QNdBsIYPSlIQ",
                desc: "A poor family schemes to become employed by a wealthy family and infiltrate their household."
              },
              {
                title: "Avatar",
                genre: "Fantasy",
                year: 2009,
                img: "https://socazxtaswqtseqkcofl.supabase.co/storage/v1/object/sign/Posters/movies/avatar.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82MTljMGYyNS00ZmYzLTQ2YjMtYmRhNi05Zjg3MTU5MTI0OWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3N0ZXJzL21vdmllcy9hdmF0YXIuanBnIiwiaWF0IjoxNzU4MDE0NTA4LCJleHAiOjIzODg3MzQ1MDh9.K4EjF5I63UA0oCmjDQHHr1OSsSzdEobm6V506bo4hcE",
                desc: "A paraplegic Marine dispatched to Pandora becomes torn between following orders and protecting the world."
              },
              {
                title: "Titanic",
                genre: "Romance",
                year: 1997,
                img: "https://socazxtaswqtseqkcofl.supabase.co/storage/v1/object/sign/Posters/movies/titanic.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82MTljMGYyNS00ZmYzLTQ2YjMtYmRhNi05Zjg3MTU5MTI0OWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3N0ZXJzL21vdmllcy90aXRhbmljLmpwZyIsImlhdCI6MTc1ODAxNDU0MSwiZXhwIjoyMzg4NzM0NTQxfQ.yScTTtmhe18dcciS8nfImxoFVbcIn_0JfBjvw5B_8pQ",
                desc: "A love story unfolds on the ill-fated RMS Titanic."
              }
            ].map((movie, idx) => (
              <div key={idx} className="relative min-w-[200px] h-[320px] bg-white/10 rounded-xl shadow-lg flex flex-col items-center justify-center border border-white/20 group">
                <img
                  src={movie.img}
                  alt={movie.title}
                  className="rounded-lg mb-4 object-cover w-40 h-56"
                />
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
            {[
              {
                title: "Jurassic World",
                genre: "Action",
                year: 2015,
                img: "https://socazxtaswqtseqkcofl.supabase.co/storage/v1/object/sign/Posters/movies/Trending%20now/jurassic.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82MTljMGYyNS00ZmYzLTQ2YjMtYmRhNi05Zjg3MTU5MTI0OWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3N0ZXJzL21vdmllcy9UcmVuZGluZyBub3cvanVyYXNzaWMuanBnIiwiaWF0IjoxNzU4MDE5NjU1LCJleHAiOjIzODg3Mzk2NTV9.TQgdwqFCVuzTpwZCFMWwfU7UGgcUja7LaqkfFUQedfU",
                desc: "A new theme park, built on the original site of Jurassic Park, creates a genetically modified hybrid dinosaur."
              },
              {
                title: "Ballerina",
                genre: "Action",
                year: 2025,
                img: "https://socazxtaswqtseqkcofl.supabase.co/storage/v1/object/sign/Posters/movies/Trending%20now/ballerina.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82MTljMGYyNS00ZmYzLTQ2YjMtYmRhNi05Zjg3MTU5MTI0OWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3N0ZXJzL21vdmllcy9UcmVuZGluZyBub3cvYmFsbGVyaW5hLmpwZyIsImlhdCI6MTc1ODAxOTY5MywiZXhwIjoyMzg4NzM5NjkzfQ.S2VYsCElahsABVH79Rfgn_0NHzXUTA7ZZW0l2QlOx_U",
                desc: "A young woman seeks revenge against those who orchestrated her family's murder in this action thriller."
              },
              {
                title: "How to Train Your Dragon",
                genre: "Animation",
                year: 2010,
                img: "https://socazxtaswqtseqkcofl.supabase.co/storage/v1/object/sign/Posters/movies/Trending%20now/how%20to%20train%20your%20dragon.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82MTljMGYyNS00ZmYzLTQ2YjMtYmRhNi05Zjg3MTU5MTI0OWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3N0ZXJzL21vdmllcy9UcmVuZGluZyBub3cvaG93IHRvIHRyYWluIHlvdXIgZHJhZ29uLmpwZyIsImlhdCI6MTc1ODAxOTgyMiwiZXhwIjoyMzg4NzM5ODIyfQ.vLgoz9O2-MyeGg2VxU6X7AArriEwSYVUxqXBPal5QJg",
                desc: "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself."
              },
              {
                title: "The Raid 2",
                genre: "Action",
                year: 2014,
                img: "https://socazxtaswqtseqkcofl.supabase.co/storage/v1/object/sign/Posters/movies/Trending%20now/raid%202.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82MTljMGYyNS00ZmYzLTQ2YjMtYmRhNi05Zjg3MTU5MTI0OWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3N0ZXJzL21vdmllcy9UcmVuZGluZyBub3cvcmFpZCAyLmpwZyIsImlhdCI6MTc1ODAxOTg1NiwiZXhwIjoyMzg4NzM5ODU2fQ.GzVcOOOlWh7JA70OGEy2p6ooqBr5WXFNn7dxrT0rXq0",
                desc: "Only a short time after the first raid, Rama goes undercover with the thugs of Jakarta to uncover corruption."
              },
              {
                title: "Sinners",
                genre: "Horror",
                year: 2025,
                img: "https://socazxtaswqtseqkcofl.supabase.co/storage/v1/object/sign/Posters/movies/Trending%20now/sinners.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82MTljMGYyNS00ZmYzLTQ2YjMtYmRhNi05Zjg3MTU5MTI0OWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3N0ZXJzL21vdmllcy9UcmVuZGluZyBub3cvc2lubmVycy5qcGciLCJpYXQiOjE3NTgwMTk4NzUsImV4cCI6MjM4ODczOTg3NX0.CRCSL3mXOBAp-XPYedaTKlCVKQBbpqrr9XX_OMbcXbk",
                desc: "Twin brothers return to their hometown to confront a violent past that still haunts them."
              }
            ].map((movie, idx) => (
              <div key={idx} className="relative min-w-[200px] h-[320px] bg-white/10 rounded-xl shadow-lg flex flex-col items-center justify-center border border-white/20 group">
                <img
                  src={movie.img}
                  alt={movie.title}
                  className="rounded-lg mb-4 object-cover w-40 h-56"
                />
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

        {/* Featured Web-series */}
  <section className="relative w-full mt-12 z-10">
          <h3 className="text-3xl font-bold text-white mb-6 ml-4">Featured Web-series</h3>
          <div className="flex overflow-x-auto gap-6 px-4 pb-4 hide-scrollbar">
            {[
              {
                title: "Game of Thrones",
                genre: "Fantasy",
                year: 2011,
                img: "https://socazxtaswqtseqkcofl.supabase.co/storage/v1/object/sign/Posters/web-series/GOT.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82MTljMGYyNS00ZmYzLTQ2YjMtYmRhNi05Zjg3MTU5MTI0OWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3N0ZXJzL3dlYi1zZXJpZXMvR09ULmpwZyIsImlhdCI6MTc1ODExNjY0MSwiZXhwIjoyMzg4ODM2NjQxfQ.8VnUzcDQY7W2JlzC7aZOcdYTKwB2axvXtVt7a-DqJPg",
                desc: "Nine noble families wage war against each other in order to gain control over the mythical land of Westeros."
              },
              {
                title: "Breaking Bad",
                genre: "Crime",
                year: 2008,
                img: "https://socazxtaswqtseqkcofl.supabase.co/storage/v1/object/sign/Posters/web-series/BB.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82MTljMGYyNS00ZmYzLTQ2YjMtYmRhNi05Zjg3MTU5MTI0OWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3N0ZXJzL3dlYi1zZXJpZXMvQkIuanBnIiwiaWF0IjoxNzU4MTE2NjU3LCJleHAiOjIzODg4MzY2NTd9.5JvqvMh3KKD-Yqq23V6m3uZ-PyIwCpBtiz7RnRF5eNk",
                desc: "A high school chemistry teacher turned methamphetamine manufacturer partners with a former student."
              },
              {
                title: "Stranger Things",
                genre: "Sci-Fi",
                year: 2016,
                img: "https://socazxtaswqtseqkcofl.supabase.co/storage/v1/object/sign/Posters/web-series/ST.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82MTljMGYyNS00ZmYzLTQ2YjMtYmRhNi05Zjg3MTU5MTI0OWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3N0ZXJzL3dlYi1zZXJpZXMvU1QuanBnIiwiaWF0IjoxNzU4MTE2Njc0LCJleHAiOjIzODg4MzY2NzR9.iBV3YyQiTw71IgNhke2_5Zk70iMGAfHRtcXe2PHedzc",
                desc: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments and supernatural forces."
              },
              {
                title: "Mirzapur",
                genre: "Crime",
                year: 2018,
                img: "https://socazxtaswqtseqkcofl.supabase.co/storage/v1/object/sign/Posters/web-series/mirzapur.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82MTljMGYyNS00ZmYzLTQ2YjMtYmRhNi05Zjg3MTU5MTI0OWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3N0ZXJzL3dlYi1zZXJpZXMvbWlyemFwdXIuanBnIiwiaWF0IjoxNzU4MTE2Njg5LCJleHAiOjIzODg4MzY2ODl9.BpOG4zJCdA_NIUzf2IoJglVbt1-LPu6ugiC8_4euMbE",
                desc: "A lawless land ruled by crime families where power, politics and revenge intersect in the most brutal ways."
              },
              {
                title: "The Family Man",
                genre: "Thriller",
                year: 2019,
                img: "https://socazxtaswqtseqkcofl.supabase.co/storage/v1/object/sign/Posters/web-series/the%20family%20man.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82MTljMGYyNS00ZmYzLTQ2YjMtYmRhNi05Zjg3MTU5MTI0OWEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJQb3N0ZXJzL3dlYi1zZXJpZXMvdGhlIGZhbWlseSBtYW4uanBnIiwiaWF0IjoxNzU4MTE2NzIzLCJleHAiOjIzODg4MzY3MjN9.5Oukmu2BMOffBrqjTXrB97WIhSxe-FIlUFw5vrxqgkU",
                desc: "A middle-class man who works for a special cell of the National Investigation Agency while trying to protect his family."
              }
            ].map((series, idx) => (
              <div key={idx} className="relative min-w-[200px] h-[320px] bg-white/10 rounded-xl shadow-lg flex flex-col items-center justify-center border border-white/20 group">
                <img
                  src={series.img}
                  alt={series.title}
                  className="rounded-lg mb-4 object-cover w-40 h-56"
                />
                <span className="text-lg font-semibold text-white">{series.title}</span>
                <span className="text-sm text-gray-300">{series.genre} • {series.year}</span>
                {/* Details on hover */}
                <div className="absolute inset-0 bg-black/80 rounded-xl flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-white">
                  <span className="text-lg font-bold mb-2">{series.title}</span>
                  <span className="text-sm mb-2">{series.genre} • {series.year}</span>
                  <span className="text-xs text-center">{series.desc}</span>
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
    </>
  );
}