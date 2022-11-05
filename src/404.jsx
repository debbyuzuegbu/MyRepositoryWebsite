import React from 'react'
import { NavLink } from "react-router-dom";
import "./pages.css"


function Error() {
  return (
    <div className="errorpage">
        <img style={{width: "20em", height:"15em"}} src="https://demo.activeitzone.com/ecommerce/public/assets/img/404.svg"/>
        <h2>Page Not Found!</h2>
        <p>Oops! The page you are looking for has not been found on our server.</p>
        <NavLink style={{textDecoration: "none", backgroundColor:"#006b6c", color:"#dafff6", borderRadius:"5px", fontFamily:"sans-serif", padding:"0.3em"}} to="/">BACK TO HOME </NavLink>
    </div>
  )
}

export default Error