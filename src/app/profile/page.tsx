
"use client";
import Navbar from "../components/Navbar";
import { supabase } from "../../utils/supabaseClient";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export default function Profile() {
  const [showAvatarPopup, setShowAvatarPopup] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const avatarList = [
    "avatar1.svg", "avatar2.svg", "avatar3.svg", "avatar4.svg", "avatar5.svg", "avatar6.svg", "avatar7.svg", "avatar8.svg", "avatar9.svg"
  ];
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
          .select('name, email, created_at, avatar')
          .eq('id', data.user.id)
          .single();
        setProfile(profileData);
        setAvatar(profileData?.avatar || "avatar5.svg");
      } else {
        setAvatar("avatar5.svg");
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
          <img src={avatar ? `/avatars/${avatar}` : "/avatars/avatar5.svg"} alt="Avatar" className="w-24 h-24 rounded-full mb-4 border-4 border-white/20 object-cover" />
          {profile && (
            <div className="flex flex-col items-center mb-4">
              <span style={{ fontWeight: 600, fontSize: '1.1rem', color: '#fff', marginBottom: '0.2rem' }}>{profile.name}</span>
              <span style={{ fontSize: '0.95rem', color: '#e5e7eb', marginBottom: '0.2rem' }}>{profile.email}</span>
              <span style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>Joined: {profile.created_at ? new Date(profile.created_at).toLocaleDateString() : ''}</span>
            </div>
          )}
          {profile && (
            <>
              <span className="text-2xl font-semibold text-white mb-2">{profile.name}</span>
              <span className="text-md text-gray-300 mb-1">{profile.email}</span>
              {profile.created_at && (
                <span className="text-sm text-gray-400 mb-4">Joined: {new Date(profile.created_at).toLocaleDateString()}</span>
              )}
            </>
          )}
          <div className="flex gap-4 mb-6">
            <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition" onClick={() => setShowAvatarPopup(true)}>Edit Avatar</button>
            <button className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition" onClick={handleLogout}>Logout</button>
          </div>
          {showAvatarPopup && (
            <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.7)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ background: "#fff", borderRadius: "1rem", padding: "2rem", boxShadow: "0 2px 16px #0002", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h2 style={{ fontFamily: 'Lora, serif', fontWeight: 700, fontSize: '1.5rem', marginBottom: '1rem', color: '#18181b' }}>Choose Your Avatar</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "1.5rem" }}>
                  {avatarList.map((file, idx) => (
                    <img
                      key={file}
                      src={`/avatars/${file}`}
                      alt={`Avatar ${idx + 1}`}
                      style={{ width: 80, height: 80, borderRadius: "50%", border: avatar === file ? "3px solid #F5B727" : "2px solid #ccc", cursor: "pointer", background: "#f9f9f9" }}
                      onClick={async () => {
                        setAvatar(file);
                        setShowAvatarPopup(false);
                        if (user) {
                          await supabase
                            .from('profiles')
                            .update({ avatar: file })
                            .eq('id', user.id);
                        }
                      }}
                    />
                  ))}
                </div>
                <button onClick={() => setShowAvatarPopup(false)} style={{ padding: "0.5rem 1.5rem", borderRadius: "0.5rem", background: "#F5B727", color: "#18181b", fontWeight: 600, border: "none", cursor: "pointer" }}>Cancel</button>
              </div>
            </div>
          )}
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
