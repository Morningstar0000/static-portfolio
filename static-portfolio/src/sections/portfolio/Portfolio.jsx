import React, { useEffect, useState } from 'react'
import "./Portfolio.scss";
import PortCategory from './Portcategories';
import PortProduct from './Portproduct';
import { Button } from '@radix-ui/themes';
import { Images } from './Images';
import { motion, AnimatePresence } from 'framer-motion';
import { container } from '../Hero';



function Portfolio() {
  const [item, setItem] = useState(Images)

  // Filtered function
  const filterItem = (ctg) => {
    const newItem = Images.filter((newVal) => {
      return newVal.category === ctg;
      // comparing category for displaying data
    });
    setItem(newItem);
  };
   

  return (
    <div>
      <div style={{ marginTop: "100px", paddingBottom: "200px" }} id='portfolio'>
        <motion.div 
        variants={container}
        initial={container.hidden}
        whileInView={container.show}
        >
        <div className='portfolio-title'>
          <div className='portfolioarticle'>
            <Button color="gray" variant="soft" style={{}}>Portfolio</Button>
            <h2 style={{ fontFamily: "fantasy" }}>Creative Portfolio</h2>
          </div>

          <div>
            <PortCategory filterItem={filterItem} setItem={setItem} />
          </div>
        </div>
        
          <AnimatePresence>
          <PortProduct item={item} />
          </AnimatePresence>
        
        </motion.div>
      </div>

    </div>
  )
}

export default Portfolio
