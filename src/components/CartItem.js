import React from 'react';

export default function CartItem({todo,  handleDelete, handleChecked,  handleQuantityChange,  checkedItems, quantity}){
 
 return (
  <li className="cart-item-body">
      <input 
      type="checkbox"
      className="cart-item-checkbox"
      checked={checkedItems.includes(todo.id)? true : false}
      onChange={(e)=> handleChecked(e.target.checked,todo.id)}
      />
     {/* <div className="cart-item-thumbnail"> */}
      <img src={todo.img} alt={todo.name} className="img" />
    {/* </div> */}
     <div className="card-item-divde">
      <div className="cart-item-info">
         <div className="cart-item-title" data-testid={`cart-${todo.name}`}>{todo.name}</div> 
          <div className="cart-item-price">{todo.point} point</div>
      </div>
      <div className="left">
      <input 
        type="number"
         min={1} 
         className="cart-item-quantity"
         value={quantity}
         onChange={(e)=> {
           handleQuantityChange(Number(e.target.value),todo.id)
         }}
        />
      <button className="cart-item-delete" onClick={()=> handleDelete(todo.itemId)}>삭제</button>
      </div>
      </div>
  </li>



 )

}