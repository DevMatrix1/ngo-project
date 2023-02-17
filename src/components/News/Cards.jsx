import React from "react"
export default function Card(props)
{
    return (
        <div className="card card-compact bg-base-100 shadow-xl w-[20%] h-[20%] hover:opacity-70 hover:skew-x-2 bg-gradient-to-r from-red-400 via-red-500 to-red-700 text-white font-bold">
        <figure><img src={props.img} className="rounded-t-2xl w-[100%] h-[50%] m-0" /></figure>
        <div className="card-body">
        <p>{props.para}</p>
        <div className="card-actions justify-end">
        </div>
        </div>
        </div> 
        )
}
/* <div className="card card-compact w-96 bg-base-100 shadow-xl">
<figure><img src="{props.img}" alt="Shoes" /></figure>
<div className="card-body">
  <p>{props.para}</p>
  <div className="card-actions justify-end">
  </div>
</div>
</div> */


/*      <div className="card p-0">
            <div className="card w-96  p-0 rounded-none border-black shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <figure><img src={props.img} alt="Shoes" /></figure>
            <div className="card-body bg-white">
                <p className="card-title">{props.para}</p>
            </div>
            </div>
         </div> */