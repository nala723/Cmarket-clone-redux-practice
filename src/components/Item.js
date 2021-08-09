import React from 'react';

export default function Item({ item , doHandleClick, notHandleClick }){
   
  return (
    <div key={item.id} className="item">
       <img src={item.img} alt={item.name} className="item-img"/>
       <span className="item-name">{item.name}</span>
       <span className="item-point">{item.point}</span>
       <div className="item-blank"></div>
       <button className="item-btn todo" onClick={(e)=> doHandleClick(e,item)}> DO </button>
       <button className="item-btn notdo" onClick={(e)=> notHandleClick(e,item)}> NOT </button>
    </div>


  )
}