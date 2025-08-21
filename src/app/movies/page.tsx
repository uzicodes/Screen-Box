import Navbar from "../components/Navbar";

export default function Movies() {
  return (
    <>
      <Navbar />
  <div className="flex flex-col items-center justify-center min-h-screen p-24 pt-36 font-cinzel" style={{ background: 'linear-gradient(to bottom, #18181b 0%, #588157 100%)' }}>
        <h1 className="text-5xl font-bold text-white mb-8">Movies</h1>
        <p className="text-lg text-gray-300">Browse all movies here.</p>
      </div>
    </>
  );
}
