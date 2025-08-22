
import Navbar from "../components/Navbar";
import { supabase } from "../../utils/supabaseClient";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function Profile() {
  const router = useRouter();

  const handleLogout = useCallback(async () => {
  await supabase.auth.signOut();
  router.push("/");
  }, [router]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-start justify-center min-h-screen p-8 pt-36 gap-8 font-cinzel" style={{ background: 'linear-gradient(to bottom, #18181b 0%, #9e0059 100%)' }}>
        <div className="w-full md:w-1/3 flex flex-col items-center bg-white/10 rounded-xl shadow-lg p-8">
          <img src="/android-icon-144x144.png" alt="Avatar" className="w-24 h-24 rounded-full mb-4 border-4 border-white/20 object-cover" />
          {/* User info removed. Add dynamic user info here if needed. */}
          <div className="flex gap-4 mb-6">
            <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">Edit Profile</button>
            <button className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition" onClick={handleLogout}>Logout</button>
          </div>
        </div>
        <div className="w-full md:w-2/3 flex flex-col bg-white/10 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Watch History</h2>
          {/* Watch history removed. Add dynamic history here if needed. */}
          <h2 className="text-3xl font-bold text-white mb-6">Other Details</h2>
          {/* Other details removed. Add dynamic details here if needed. */}
        </div>
      </div>
    </>
  );
}
