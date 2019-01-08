import React from 'react';
import './Button.css';

export function BigNum(props) {
    return (
        <div class ='numboxL'>
        <h3>{props.num}</h3>
        </div>
       )
}


function RegNum(props) {
   return (
    <div class ='numbox'>
    <h3>{props.num}</h3>
    </div>
   )
}

export default RegNum;

