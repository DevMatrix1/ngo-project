import React from "react";
export default function BigCard() {
    return(
        <div className="p-12">
        <div className="hero min-h-[52vh] w-[60%] mx-auto rounded-2xl" style={{ backgroundImage: `url("story/players.png")` }}>
        <div className="hero-overlay bg-opacity-60 rounded-2xl hover:bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content hover:font-bold">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold">Jamshedpur FC Mohun Bagan for their finals</h1>
            <p className="mb-5">After putting up another dominant performance to churn out their second away win of the season, Jamshedpur FC head coach Aidy Boothroyd is optimistic.</p>
            <button className=" btn btn-primary bg-gradient-to-r from-blue-500 to-blue-700 hover:bg-blue-900">View More</button>
          </div>
        </div>
      </div>
      </div>
    )
}