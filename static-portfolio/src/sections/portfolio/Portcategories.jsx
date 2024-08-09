import React,{ } from 'react'
import { Images } from './Images';




function PortCategory({ setItem, filterItem} ) {
 
  // Extract unique categories from the Images array
  const Categories = [...new Set(Images.map(img => img.category))];

  

  return (
    <div>
      <div>
        <ul>
        <li onClick={() => setItem(Images)}>All</li>
          {Categories.map(category => (
            <li key={category} onClick={() =>filterItem(category)}>{category}</li>
          ))}
         
        </ul>
      </div>
    </div>
  );
}

export default PortCategory;
