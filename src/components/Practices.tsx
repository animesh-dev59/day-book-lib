   'use client'
 import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Practices = () => { 
  const [count,setCount] = useState<number>(0);
   const handleIncreaseButtton = () => { 
     setCount(count + 1);
     toast.success(`Count + 1`)
   } 
   const handleDescreaseButton = () => {   
    setCount(count - 1);
    toast.success(`Count - 1`)
   } 
   const handleRemoveButton = () => { 
    setCount(0);
    toast.success(`Count 0`)
   }
  return (
      <div className='text-center mb-7 mx-auto container bg-amber-200 p-8 rounded-4xl'>   
         <h3 className='text-9xl font-bold'>{count}</h3>
        <div className='gap-4 flex items-center justify-center my-3'>       
         <button    
         onClick={handleIncreaseButtton}
          className='btn '>increase +1</button>
         <button 
         onClick={handleDescreaseButton}
          className='btn'>Discrease -1</button>
         <button 
         onClick={handleRemoveButton}
          className='btn'>Reset 0</button>
        </div> 

      </div>
  );
};

export default Practices;