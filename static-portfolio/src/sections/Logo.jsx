import React from 'react';
import Marquee from "react-fast-marquee";
import { Logoimage } from '../components/Logoimage';

function Logo( ) {
  return (
    <div>
      <Marquee pauseOnHover={true} direction="right" speed={50} gradient={true} gradientColor='white'>
             {Logoimage.map((image, index) =>{
                return( 
                    <div style={{ backgroundColor:"white", padding:"50px", paddingTop:"40px"}} key={index}>
                        <img src={image.img} alt="" />
                    </div>
                )
             })}
</Marquee>
    </div>
  )
}

export default Logo;
