import React from 'react';
import './App.css';
import Widget1 from './components/DisplayComponents/CalculatorDisplay'
import RegNum, { BigNum } from './components/ButtonComponents/NumberButton';
import Oper from './components/ButtonComponents/ActionButton';

const App = () => {
  return (
    <div class='container'>

      <h3>Welcome to React Calculator</h3>
      <Widget1 />

      <div class ='row'>
      <BigNum num ="CLEAR"/>
      <Oper num = "÷"/>
      </div>
      
      <div class ='row'>
      <RegNum num ="1"/>
      <RegNum num ="2"/>
      <RegNum num ="3"/>
      <Oper num = "x"/>
      </div>
      
      <div class ='row'>
      <RegNum num ="4"/>
      <RegNum num ="5"/>
      <RegNum num ="6"/>
      <Oper num = "-"/>
      </div>
      
      <div class ='row'>
      <RegNum num ="7"/>
      <RegNum num ="8"/>
      <RegNum num ="9"/>
      <Oper num = "+"/>
      </div>

      <div class ='row'>
      <BigNum num ="0"/>
      <Oper num = "="/>
      </div>

     
      
    </div>
  );
};

export default App;
