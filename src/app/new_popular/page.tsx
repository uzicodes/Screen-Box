import Navbar from "../components/Navbar";

export default function NewPopular() {
  return (
    <>
      <Navbar />
  <div className="flex flex-col items-center min-h-screen p-24 pt-36 font-cinzel" style={{ background: 'linear-gradient(to bottom, #000000 0%, #0A0A2A 25%, #1A1A3A 50%, #2A2A4A 75%, #3A3A5A 100%)' }}>
  <p className="text-3xl font-bold text-white mb-8">See what's new and trending!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img src={`/c1.jpg`} alt={`Movie ${i}`} className="w-40 h-56 object-cover rounded-lg mb-4" />
              <h2 className="text-2xl font-bold text-yellow-200 mb-2">Movie Title {i}</h2>
              <p className="text-lg text-white mb-2">Genre: Action</p>
              <p className="text-md text-white mb-4">A short description of Movie {i}. This is just a dummy movie card for layout preview.</p>
              <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">Watch Now</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
