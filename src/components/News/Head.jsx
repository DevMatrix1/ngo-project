import React from "react";
export default function Head()
{
    return (
        <div className="head_top flex gap-6 flex-col font-serif">
            <div className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 w-[99vw] text-5xl text-white p-5">
                <div>NEWS</div>
            </div>
            <div className="p-5">
                <div className="text-4xl text-black">Real Stories</div>
                <div className="text-lg text-black">Most recent news of our association</div>
            </div>
            <div className="bg-gradient-to-r from-blue-800 via-blue-500 to-blue-50 w-[90vw] h-[4px] ml-5"></div>
        </div>
    )
}