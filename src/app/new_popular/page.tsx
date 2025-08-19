import Navbar from "../components/Navbar";

export default function NewPopular() {
  return (
    <>
      <Navbar />
  <div className="flex flex-col items-center justify-center min-h-screen p-24 pt-36 bg-[#18181b] font-cinzel">
        <h1 className="text-5xl font-bold text-white mb-8">New & Popular</h1>
        <p className="text-lg text-gray-300">See what's new and trending!</p>
      </div>
    </>
  );
}
