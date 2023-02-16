import React from "react";
export default function Head()
{
    return (
        <div className="head_top flex gap-6 flex-col">
            <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 w-[98vw] text-5xl text-white p-5">
                <p>NEWS</p>
            </div>
            <div className="p-5">
                <p className="text-4xl text-black">Real Stories</p>
                <p className="text-lg text-black">Most recent news of our association</p>
            </div>
            <div className="bg-gradient-to-r from-blue-900 via-blue-300 to-blue-50 w-[90vw] h-[4px] ml-5"></div>
        </div>
    )
}