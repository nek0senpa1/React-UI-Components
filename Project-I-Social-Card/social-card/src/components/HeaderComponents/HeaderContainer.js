import React from 'react';
import './Header.css';



import HeaderTitle from './HeaderTitle';
import ImageTitle from './ImageThumbnail';
import HeaderContent from './HeaderContent';



function HeaderC() {
    return (
      <div class ='container2'>
      <div class ='athing'>
        <ImageTitle />
        </div>
        <div class ='bthing'>
        <HeaderTitle />
        
        <HeaderContent />
        </div>

      </div>
    );
  }
  
  export default HeaderC;