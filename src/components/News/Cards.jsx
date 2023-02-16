import React from "react"
export default function Card(props)
{
    return (
        <div className="card p-0">
        <div className="card w-96  p-0 rounded-none border-black shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <figure><img src={props.img} alt="Shoes" /></figure>
            <div className="card-body bg-white">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.para}</p>
            </div>
            </div>
        </div>
        )
}