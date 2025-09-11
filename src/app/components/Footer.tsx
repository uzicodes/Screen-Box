// Footer component for all pages
export default function Footer() {
  return (
    <footer className="w-full bg-gray-900/80 backdrop-blur-lg border-t border-white/20 mt-0" style={{ fontFamily: 'Lora, serif' }}>
      <div className="max-w-5xl mx-auto flex items-center justify-between px-8 py-3">
        <div className="flex gap-6">
          <a href="#" className="text-gray-200 hover:text-yellow-300 font-semibold transition">About</a>
          <a href="#" className="text-gray-200 hover:text-yellow-300 font-semibold transition">Contacts</a>
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
  );
}
