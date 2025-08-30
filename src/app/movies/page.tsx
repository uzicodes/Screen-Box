import Navbar from "../components/Navbar";

export default function Movies() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen p-24 pt-36 font-cinzel" style={{ background: 'linear-gradient(to bottom, #18181b 0%, #588157 100%)' }}>
  <p className="text-3xl font-bold text-white mb-8">Browse all your movies here</p>
        <div className="w-full max-w-3xl bg-white/10 rounded-xl shadow-lg p-6 mb-8 flex flex-col md:flex-row gap-4 items-center justify-center">
          <input
            type="text"
            placeholder="Title"
            className="px-4 py-2 rounded bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ minWidth: 120 }}
          />
          <input
            type="text"
            placeholder="Genre"
            className="px-4 py-2 rounded bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ minWidth: 120 }}
          />
          <input
            type="number"
            placeholder="Year Published"
            className="px-4 py-2 rounded bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ minWidth: 120 }}
          />
          <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition font-semibold">Search</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="bg-white/10 rounded-xl shadow-lg p-6 flex flex-col items-center">
              <img src={`/c1.jpg`} alt={`Movie ${i}`} className="w-40 h-56 object-cover rounded-lg mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">Movie Title {i}</h2>
              <p className="text-gray-300 mb-2">Genre: Action</p>
              <p className="text-gray-400 text-sm mb-4">A short description of Movie {i}. This is just a dummy movie card for layout preview.</p>
              <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">Watch Now</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
