import React from 'react'
import logosvg from "../assets/logo-svg.svg"

function Footer( ) {
  return (
    <div>
         <div className='footer'>
            <p>&copy; Morningstar design</p>

        <div className='logofooter' >
        <img src={logosvg} alt="logo" style={{ width: "100%", }}  />
        </div>
         </div>
    </div>
  )
}

export default Footer;
