import Navbar from "../components/Navbar";

export default function Movies() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen p-24 pt-36 bg-[#18181b]">
        <h1 className="text-5xl font-bold text-white mb-8">Movies</h1>
        <p className="text-lg text-gray-300">Browse all movies here.</p>
      </div>
    </>
  );
}
