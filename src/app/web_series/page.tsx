import Navbar from "../components/Navbar";

export default function WebSeries() {
  return (
    <>
      <Navbar />
  <div className="flex flex-col items-center justify-center min-h-screen p-24 pt-36 font-cinzel" style={{ background: 'linear-gradient(to bottom, #18181b 0%, #a5a58d 100%)' }}>
        <h1 className="text-5xl font-bold text-white mb-8">Web Series</h1>
        <p className="text-lg text-gray-300">Browse all web series here.</p>
      </div>
    </>
  );
}
