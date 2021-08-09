import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo, setQuanity } from '../actions';
import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';

export default function ShoppingCart() {
    const state = useSelector(state => state.itemReducer)
    const { items, todos, notTodos } = state;
    const dispatch = useDispatch();
    const [checkedD, setCheckedD] = useState(todos.map((todo)=> todo.itemId))
    const [checkedN, setCheckedN] = useState(notTodos.map((todo)=> todo.itemId))

    const handleChecked = (checked, id) => {
       // checked는 boolean! id와 함께 받아 id를 업뎃해주면 됨
       if(checked){
           setCheckedD([...checkedD, id])
           setCheckedN([...checkedN, id])
       }
       else {
           setCheckedD(checkedD.filter(c => c !== id)) // ? 꼭해줘야하나
           setCheckedN(checkedD.filter(c => c !== id)) 
       }
       
    }

    const handleAllCheck = (checked) => {
      //만약 true라면 모든곳에 체크되게..-> 그냥 todos다 불러오면됨!
      // event.target.value로 접근해서 todo / nottodo 같이 할수있을지 보자 --next
      if(checked){
          setCheckedD(todos.map(c =>c.itemId))
      }
      else {
          setCheckedD([]);
      }

    }
    const handleQuantityChange = (quanity,itemId) => {
      dispatch(setQuanity(itemId,quanity))
    }
 
    const handleDelete = (itemId) => { // 현재 클릭시 다 삭제됨(?)
        setCheckedD(checkedD.filter(c => c.itemId !== itemId))
        dispatch(removeTodo(itemId))
    }
    const getTotal = () => {
        //총 갯수를 구하려면 -> todos의 갯수 + notTodos의 갯수
        // checked된 것의 total, point
        // 각각 todo, nottodo에서 id만 맵해온다
        // total 오브젝트 하나만듬
        // 상태들 탐색하며 total의 quantity, point에 추가
       let toDoIds = todos.map(to => to.itemId)
       let noDoIds = notTodos.map(to => to.itemId)
       let total = {
           quantity : 0,
           point : 0
       }
       for(let i=0; i< toDoIds.length; i++){
         if(checkedD.includes(toDoIds[i])){ //인덱스 순서 같으니까!
             let quantity = todos[i].quantity
             let point = items.filter(el => el.id === todos[i].itemId)[0].point

             total.quantity = total.quantity + quantity
             total.point = total.point + quantity * point
         }
       } 
       for(let i=0; i< noDoIds.length; i++){
        if(checkedN.includes(noDoIds[i])){ //인덱스 순서 같으니까!
            let quantity = notTodos[i].quantity
            let point = items.filter(el => el.id === notTodos[i].itemId)[0].point

            total.quantity = total.quantity + quantity
            total.point = total.point + quantity * point
        }
      }
      return total 
    }
  
    //두 상태를 다 담고 있는 상태가 있어도 편할듯?
    // 대박스! 이거 해주고 렌더링 코드에 넣어주니 사진이 보인다???? + 전체선택, 부분 선택도 정상적으로????
    const renderTodo = items.filter((el) => todos.map((el)=> el.itemId).indexOf(el.id) > -1)
    const renderNotdo = items.filter((el) => notTodos.map((el) => el.itemId).indexOf(el.id) > -1)
    const total = getTotal()

 return (
  <div id='item-list-container'>
     <div id="shopping-body">
       <div className="todoli">
        <div id="item-list-title"> To-do </div>
         <span id="shopping-cart-select-all">
           <input type="checkbox"
           checked={checkedD.length === todos.length ? true : false}
           onChange={(e) => handleAllCheck(e.target.checked)}/>
           <label>전체선택</label>
        </span>
        <div id="shopping-cart-container">
           {!todos.length ?  (
               <div id="cart-item-text">
                   할 일이 없나요?
               </div>
            ) : (
                <div id="cart-item-list">
                  {renderTodo.map((todo, idx) => { // 그냥 todos state는 name,point 등등의 프로퍼티가 없으므로 다시 items와 비교!
                    const quantity =  todos.filter(el => el.itemId === todo.id)[0].quantity
                    return <CartItem 
                        key={idx}
                        todo={todo} 
                        handleDelete={handleDelete}
                        handleChecked={handleChecked}
                        handleQuantityChange={handleQuantityChange}
                        checkedItems={checkedD}
                        quantity={quantity}
                    />
                  })}
                </div> 
             )}
        </div>
        </div> 
        <div className="todoli">  
        <div id="item-list-title"> Not To-do </div>
         <span id="shopping-cart-select-all">
           <input type="checkbox"/>
           <label>전체선택</label>
        </span>
        <div id="shopping-cart-container">
           {!notTodos.length ?  (
               <div id="cart-item-text">
                   할 일이 없나요?
               </div>
            ) : (
                <div id="cart-item-list">
                  {renderNotdo.map((todo, idx) => { 
                    const quantity = notTodos.filter(el => el.itemId === todo.id)[0].quantity
                    return <CartItem 
                        key={idx}
                        todo={todo} 
                        handleDelete={handleDelete}
                        handleChecked={handleChecked}
                        handleQuantityChange={handleQuantityChange}
                        checkedItems={checkedN}
                        quantity={quantity}
                    />
                  })}
                </div> 
             )}
         </div> 
        </div>
            <OrderSummary total={total.point} totalQty={total.quantity} />
     </div>
  </div>
  

 )
}
