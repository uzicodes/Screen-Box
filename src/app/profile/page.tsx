
"use client";
import Navbar from "../components/Navbar";
import { supabase } from "../../utils/supabaseClient";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserAndProfile = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user ?? null);
      if (data?.user) {
        const { data: profileData } = await supabase
          .from('profiles')
          .select('name, email')
          .eq('id', data.user.id)
          .single();
        setProfile(profileData);
      }
      setLoading(false);
    };
    getUserAndProfile();
  }, []);

  const handleLogout = useCallback(async () => {
    await supabase.auth.signOut();
    router.push("/");
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white text-xl">Loading...</div>
    );
  }

  if (!user) {
    return (
      <>
        <Navbar />
        {/* Lora Google Font import for client-side rendering */}
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap" rel="stylesheet" />
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white" style={{ fontFamily: 'Lora, serif' }}>
          <div className="text-3xl mb-4 font-bold" style={{ fontFamily: 'Lora, serif' }}>
            You must be logged in to view your profile.
          </div>
          <div className="text-lg mb-8 text-gray-300" style={{ fontFamily: 'Lora, serif' }}>
            Please log in to access your account details, watch history, and more.
          </div>
          <button
            className="px-6 py-3 rounded bg-blue-600 text-white text-xl hover:bg-blue-700 transition font-bold"
            style={{ fontFamily: 'Lora, serif' }}
            onClick={() => router.push('/login')}
          >
            Go to Login
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-start justify-center min-h-screen p-8 pt-36 gap-8 font-cinzel" style={{ background: 'linear-gradient(to bottom, #18181b 0%, #9e0059 100%)' }}>
        <div className="w-full md:w-1/3 flex flex-col items-center bg-white/10 rounded-xl shadow-lg p-8">
          <img src="/android-icon-144x144.png" alt="Avatar" className="w-24 h-24 rounded-full mb-4 border-4 border-white/20 object-cover" />
          {profile && (
            <>
              <span className="text-2xl font-semibold text-white mb-2">{profile.name}</span>
              <span className="text-md text-gray-300 mb-4">{profile.email}</span>
            </>
          )}
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
