import Navbar from "./components/Navbar";

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-start justify-center min-h-screen p-8 pt-36 bg-[#18181b] gap-8">
        <div className="w-full md:w-1/3 flex flex-col items-center bg-white/10 rounded-xl shadow-lg p-8">
          <img src="/android-icon-144x144.png" alt="Avatar" className="w-24 h-24 rounded-full mb-4 border-4 border-white/20 object-cover" />
          <span className="text-2xl font-semibold text-white mb-2">John Doe</span>
          <span className="text-md text-gray-300 mb-4">johndoe@email.com</span>
          <span className="text-sm text-green-400 mb-6">Premium Member</span>
          <div className="flex gap-4 mb-6">
            <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">Edit Profile</button>
            <button className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition">Logout</button>
          </div>
        </div>
        <div className="w-full md:w-2/3 flex flex-col bg-white/10 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Watch History</h2>
          <ul className="list-disc pl-6 text-gray-300 mb-8">
            <li>Inception</li>
            <li>Interstellar</li>
            <li>The Dark Knight</li>
          </ul>
          <h2 className="text-3xl font-bold text-white mb-6">Other Details</h2>
          <div className="text-gray-300">
            <p>Favorite Genre: Sci-Fi</p>
            <p>Last Login: 2025-08-18</p>
            <p>Account Created: 2023-01-01</p>
          </div>
        </div>
      </div>
    </>
  );
}
