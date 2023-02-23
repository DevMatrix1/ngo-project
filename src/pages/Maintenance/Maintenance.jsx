import React from 'react'
import './Maintenance.css'

export const Maintenance = () => {
  return (
    <>
        <div className="main ">
        
        <div className="section1">
          UNDER <br />
          CONSTRUCTION
        </div>
        
        <div className="section2">
          <p>SITE NEARLY READY</p>
          <div className="mbar">
            <div className="red"></div>
            <div className="white"></div>
          </div>
          <div className="range">
            <div>0%</div>
            <div>100%</div>
          </div>
          <div className="notify">
            <a href="/">Notify Me!</a>
          </div>
        </div>
        
        <div className="social">
          <a href="/"><i className="fa fa-brands fa-facebook-f">&nbsp;</i></a>
          <a href="/"><i className="fa fa-brands fa-linkedin-in"></i></a>
          <a href="/"><i className="fa fa-brands fa-instagram"></i></a>
          <a href="/"><i className="fa fa-brands fa-twitter"></i></a>
        </div>
     
      </div>
    </>
  )
}

