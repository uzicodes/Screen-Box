import Navbar from "../components/Navbar";
  <Navbar />
export default function Profile() {
  return (
    <>
      <Navbar />
  <div className="flex flex-col items-center justify-center min-h-screen p-24 bg-[#18181b]">
        <h1 className="text-5xl font-bold text-white mb-8">Profile</h1>
        <p className="text-lg text-gray-300">Manage your account here.</p>
      </div>
    </>
  );
}
