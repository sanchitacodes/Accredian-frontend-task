// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// import { useState } from "react";

// function App() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-6">
//       {/* Hero Section */}
//       <h1 className="text-4xl font-bold text-gray-800">Refer & Earn</h1>
//       <p className="text-gray-600 mt-2">Invite your friends and earn rewards!</p>
//       <button
//         className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
//         onClick={() => setIsModalOpen(true)}
//       >
//         Refer Now
//       </button>

//       {/* Popup Modal */}
//       {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
//     </div>
//   );
// }

// // Popup Modal Component
// function Modal({ onClose }) {
//   const [referrer, setReferrer] = useState("");
//   const [referee, setReferee] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!referrer || !referee) {
//       setError("All fields are required!");
//       return;
//     }
//     alert(`Referral submitted!\nReferrer: ${referrer}\nReferee: ${referee}`);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-semibold text-gray-800">Refer a Friend</h2>
//         {error && <p className="text-red-500 text-sm">{error}</p>}

//         <form onSubmit={handleSubmit} className="mt-4">
//           <label className="block text-gray-700">Your Name</label>
//           <input
//             type="text"
//             className="w-full p-2 border rounded mt-1"
//             value={referrer}
//             onChange={(e) => setReferrer(e.target.value)}
//           />

//           <label className="block text-gray-700 mt-3">Friend's Email</label>
//           <input
//             type="email"
//             className="w-full p-2 border rounded mt-1"
//             value={referee}
//             onChange={(e) => setReferee(e.target.value)}
//           />

//           <button
//             type="submit"
//             className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//           >
//             Submit Referral
//           </button>
//         </form>

//         <button
//           className="mt-3 text-gray-600 hover:text-gray-900"
//           onClick={onClose}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;


// import { useState } from "react";

// function App() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     // <div className="flex flex-col items-center justify-center flex-1 w-full min-h-screen bg-blue-100 p-6">
//     <div className="flex flex-col items-center justify-center min-h-screen w-full bg-blue-100 p-6 text-center">

//       {/* Hero Section */}
//       <h1 className="text-4xl font-bold text-red-800">Refer & Earn</h1>
//       <p className="text-gray-600 mt-2">Invite your friends and earn rewards!</p>
//       <button
//         className="mt-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
//         onClick={() => setIsModalOpen(true)}
//       >
//         Refer Now
//       </button>

//       {/* Popup Modal */}
//       {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
//     </div>
//   );
// }

// // Popup Modal Component
// function Modal({ onClose }) {
//   const [referrer, setReferrer] = useState("");
//   const [referee, setReferee] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!referrer || !referee) {
//       setError("All fields are required!");
//       return;
//     }
//     alert(`Referral submitted!\nReferrer: ${referrer}\nReferee: ${referee}`);
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-gray-800">Refer a Friend</h2>
//         {error && <p className="text-red-500 text-sm">{error}</p>}

//         <form onSubmit={handleSubmit} className="mt-4">
//           <label className="block text-gray-700">Your Name</label>
//           <input
//             type="text"
//             className="w-full p-2 border rounded mt-1"
//             value={referrer}
//             onChange={(e) => setReferrer(e.target.value)}
//           />

//           <label className="block text-gray-700 mt-3">Friend's Email</label>
//           <input
//             type="email"
//             className="w-full p-2 border rounded mt-1"
//             value={referee}
//             onChange={(e) => setReferee(e.target.value)}
//           />

//           <button
//             type="submit"
//             className="w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//           >
//             Submit Referral
//           </button>
//         </form>

//         <button
//           className="mt-3 text-gray-600 hover:text-gray-900"
//           onClick={onClose}
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;


import React from "react";
import HeroSection from "./components/HeroSection";

function App() {
  return <HeroSection />;
}

export default App;
