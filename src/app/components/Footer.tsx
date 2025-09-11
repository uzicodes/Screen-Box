"use client";
// Footer component for all pages
import { useState } from 'react';
export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <footer className="w-full bg-gray-900/80 backdrop-blur-lg border-t border-white/20 mt-0" style={{ fontFamily: 'Lora, serif' }}>
        <div className="max-w-5xl mx-auto flex items-center justify-between px-8 py-3">
          <div className="flex gap-6">
            <a href="#" className="text-gray-200 hover:text-yellow-300 font-semibold transition">About</a>
            <button onClick={() => setShowModal(true)} className="text-gray-200 hover:text-yellow-300 font-semibold transition focus:outline-none bg-transparent">Contacts</button>
          </div>
          <div className="flex-1 flex justify-center">
            <span className="text-gray-200 text-base flex items-center gap-2">
              made with
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ef4444" className="w-5 h-5 mx-1" style={{display:'inline'}}>
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <a href="https://github.com/uzicodes" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 no-underline transition">uzicodes</a>
            </span>
          </div>
          <span className="text-gray-400 text-sm">&copy; 2025 Screen Box. All rights reserved.</span>
        </div>
      </footer>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col items-center min-w-[320px] relative" style={{ fontFamily: 'Lora, serif' }}>
            <button onClick={() => setShowModal(false)} className="absolute top-2 right-2 text-gray-400 hover:text-red-400 text-2xl font-bold">&times;</button>
            <h2 className="text-xl font-bold text-white mb-4">Connect with us</h2>
            <div className="flex gap-6 mb-2">
              <a href="https://github.com/uzicodes" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-yellow-300 text-2xl" title="GitHub">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z" />
                </svg>
              </a>
              <a href="https://instagram.com/uzicodes" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-yellow-300 text-2xl" title="Instagram">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm6.13 1.12a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0z" />
                </svg>
              </a>
              <a href="https://x.com/uzicodes" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-yellow-300 text-2xl" title="X">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                  <path d="M17.53 2H6.47A4.47 4.47 0 0 0 2 6.47v11.06A4.47 4.47 0 0 0 6.47 22h11.06A4.47 4.47 0 0 0 22 17.53V6.47A4.47 4.47 0 0 0 17.53 2zM8.7 16.29H6.59l3.13-4.13-2.98-3.86h2.11l2.01 2.61 2.01-2.61h2.11l-2.98 3.86 3.13 4.13h-2.11l-2.16-2.8-2.16 2.8zm8.83 1.24a2.73 2.73 0 0 1-2.73 2.73H6.47a2.73 2.73 0 0 1-2.73-2.73V6.47a2.73 2.73 0 0 1 2.73-2.73h11.06a2.73 2.73 0 0 1 2.73 2.73v11.06z" />
                </svg>
              </a>
              <a href="mailto:uzicodes@gmail.com" className="text-gray-200 hover:text-yellow-300 text-2xl" title="Mail">
                <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20v-9.99l7.29 6.8a1 1 0 0 0 1.42 0L20 10.01V20H4z" />
                </svg>
              </a>
            </div>
            <span className="text-gray-400 text-xs">@uzicodes</span>
          </div>
        </div>
      )}
    </>
  );
}
