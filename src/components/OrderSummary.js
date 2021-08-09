import React from 'react';

export default function OrderSummary({total, totalQty}){

 return (
     <div id="order-summary-container">
       <h4> Today's Goal </h4>
       <div id="order-summary">
         할 일 : <span className="Order-summary-text">{totalQty} 개</span>
         <hr></hr>  
         <div id="order-summary-total">
          총 점은? <sapn className="order-summary-text">{total} 점!</sapn>
         </div>
       </div>
     </div>

 )
}