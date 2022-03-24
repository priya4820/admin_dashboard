import React, { Component } from 'react'
import { useState } from 'react';

import ReactDOM from 'react-dom';

const Math=()=> {
   const [number1, setNumber1] = useState(0);
   const [number2, setNumber2] = useState(0);
   const [total, setTotal] = useState(number1 + number2);

   function calculateTotal() {
      setTotal(number1 + number2);
   }

   function calculateMul(){
     setTotal(number1 * number2);
   }
  function calculateDiv(){
     setTotal(number1 / number2);
  }
   return (

      <div>
        <span> <div>
            <label >Enter A Number : </label>
            <input type="text"
               value={number1}
               onChange={(e) => setNumber1(+e.target.value)}
               placeholder='Enter A Num'/><br /><br />


           <label >Enter B Number : </label>
            <input type="text"
               value={number2}
               onChange={(e) => setNumber2(+e.target.value)}
               placeholder='Enter B Num' /><br />
         </div></span>

         <button onClick={calculateTotal}>sum</button><span>&nbsp;</span> 
          <button onClick={calculateMul}>Mul</button><span>&nbsp;</span> 
          <button onClick={calculateDiv}>Div</button><span>&nbsp;</span>
         <h2>{total}</h2>
         
      </div>


   );
}

const rootElement = 
document.getElementById("root");

export default Math;
