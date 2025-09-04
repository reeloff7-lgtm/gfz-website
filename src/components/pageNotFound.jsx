import React from 'react'
import { Link } from "react-router-dom";

function pageNotFound() {
  return (
    <>
        <div className="flex flex-col items-center justify-center text-center gap-5 min-h-screen bg-white text-black p-6">
            <h1 className="text-6xl font-bold text-amber-500">404</h1>
            <h2 className="text-4xl mt-4 font-bold">Page Not Found</h2>
            <p className="text-gray-400 mt-2 text-center max-w-md">
                Oops! The page you’re looking for doesn’t exist or may have been moved.
            </p>
            <Link to="/" className="mt-6 px-6 py-3 bg-amber-500 text-black font-semibold rounded-xl shadow hover:bg-amber-400 transition">Go Back Home</Link>
        </div>

    </>
  )
}

export default pageNotFound
