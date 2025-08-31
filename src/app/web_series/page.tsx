import Navbar from "../components/Navbar";

export default function WebSeries() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center min-h-screen p-24 pt-36 font-cinzel" style={{ background: 'linear-gradient(to bottom, #18181b 0%, #a5a58d 100%)' }}>
        <p className="text-3xl font-bold text-white mb-8">Browse all web series here</p>
        <div className="flex flex-col gap-10 w-full max-w-5xl">
          {[1,2,3].map(i => (
            <div key={i} className="bg-white/10 rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center w-full">
              <img src={`/c1.jpg`} alt={`Web Series ${i}`} className="w-full md:w-96 h-64 object-cover rounded-lg mb-6 md:mb-0 md:mr-8" />
              <div className="flex-1 flex flex-col justify-center items-start">
                <h2 className="text-3xl font-bold text-yellow-200 mb-2">Web Series Title {i}</h2>
                <p className="text-lg text-white mb-2">Genre: Drama</p>
                <p className="text-md text-white mb-4">A longer description of Web Series {i}. This is a dummy card for layout preview. The details section is wide and stretches across the page for a cinematic look. You can add more info here as needed.</p>
                <p className="text-md text-white mb-2">Year: 2022</p>
                <button className="px-6 py-3 rounded bg-blue-600 text-white hover:bg-blue-700 transition text-lg font-semibold">Watch Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
