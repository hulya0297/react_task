import React from 'react';
import './card.css';



function Card(props) {
  return (
  
    <div className='card'>
  <div className='card_content'>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfV3HujFxiZrHyGsaae-PuG0GVKcWMPwQMbQ&usqp=CAU" alt="" />
     <h3 className='card_title'>{props.cardtitle}</h3>
     <button className={`add_cart ${props.color}`}>{props.button}</button>
     
  </div>
  
</div>

    
  )
}

export default Card