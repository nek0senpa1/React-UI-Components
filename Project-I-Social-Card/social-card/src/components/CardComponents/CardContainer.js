import React from 'react';
import './Card.css';


import CardB from './CardBanner.js';
import CardCon from './CardContent';




function CardC() {
    return (
       <a class='nonlink' href="https://reactjs.org">
      <div class ='container2'>
          <div class='athing'>
          </div>
          <div class ='bthing'>
        <CardB />
        
        <CardCon />
        </div>
      </div>
      </a>
      
    );
  }
  
  export default CardC;