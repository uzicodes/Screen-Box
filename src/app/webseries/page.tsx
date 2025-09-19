import React from "react";

export default function WebSeriesPage() {
	 return (
		 <div className="p-8 text-white min-h-screen flex flex-col items-center">
			 <h1 className="text-3xl font-bold mb-4">Web Series</h1>
			 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
				 {[...Array(21)].map((_, i) => (
					 <div key={i} className="bg-gray-900 rounded-lg shadow-lg p-4 flex flex-col items-center">
						 <img src="/c1.jpg" alt={`Webseries ${i+1}`} className="w-40 h-56 object-cover rounded-lg mb-4" />
						 <h2 className="text-2xl font-bold text-yellow-200 mb-2">Webseries Title {i+1}</h2>
						 <p className="text-lg text-white mb-2">Genre: Drama</p>
						 <p className="text-md text-gray-300 mb-2">2023</p>
						 <p className="text-md text-black font-normal mb-4 text-center">A short description of Webseries {i+1}. This is just a dummy webseries card for layout preview.</p>
					 </div>
				 ))}
			 </div>
		 </div>
	 );
}
