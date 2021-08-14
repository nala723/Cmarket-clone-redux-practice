import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export default function Nav(){
    const state = useSelector(state => state.itemReducer) // state 또 selector로 받아옴!
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const showButton = () => {
      if(window.innerWidth <= 960){
        setButton(false);
      }else {
        setButton(true);
      }
    }
   
    useEffect(()=>{
      showButton();
    },[])

    window.addEventListener('resize', showButton);

 return (
  <div id="nav-body">
     <span id="title">
         {/* <img src="" alt="" id="logo"/> */}
        <svg xmlns="http://www.w3.org/2000/svg" id="logo" viewBox="0 0 24 24">
           <g fill='#FFFFFF'>
            <path d="M22.5 4.5c-.8-.8-2.2-.8-3 0L9 15l-4.5-4.5c-.8-.8-2.2-.8-3 0s-.8 2.2 0 3L9 21 22.5 7.5c.8-.8.8-2.2 0-3z">
            </path>
          </g>
        </svg>
         <span id="name"> DoorNot </span>
     </span>
     <div id="lmenu" onClick={()=>setClick(!click)}>
       {!click ? <FaIcons.FaBars className="fas fa-bars" /> : <AiIcons.AiOutlineClose className="fas fa-times"/>}
     </div>
    { button && (<div id="menu">
         <Link to='/'>To-do list </Link>
         <Link to='/shoppingCart'>
           내 todo 
            <span id="nav-item-counter">{state.todos.length + state.notTodos.length}</span>
         </Link>
     </div>)}
  </div>
 )
}