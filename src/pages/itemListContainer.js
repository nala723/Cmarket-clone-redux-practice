import React from 'react';
import Item from '../components/Item';
import { addTodo, addNotdo, notify } from '../actions/index';
import { useSelector, useDispatch } from 'react-redux';

function ItemListContainer() {
  const state = useSelector(state => state.itemReducer); // state 여기서 가져옴(useSelector 이용)
  const { items, todos, notTodos } = state;
  const dispatch = useDispatch();

 // handleClick 함수 추가!
 const doHandleClick = (item) => {
  if(!todos.map((todo) =>todo.itemId).includes(item.id)){
    dispatch(addTodo(item.id))
    dispatch(notify(`오늘은 ${item.name}!`)) //여기서 메세지를 정의해서 보내주는구낭!
  }
  else{
   dispatch(notify('이미 할일 목록에 있어용'))
  }
 }

 const notHandleClick = (item) => {
  if(!notTodos.map((todo) =>todo.itemId).includes(item.id)){
    dispatch(addNotdo(item.id))
    dispatch(notify(`오늘은 No ${item.name}!`)) //여기서 메세지를 정의해서 보내주는구낭!
  }
  else{
   dispatch(notify('이미 안 할 일 목록에 있어용'))
  }
 }


  return (
    <div id="item-list-container">
       <div id="item-list-body">
         <div id="item-list-title"> Select your 'To-do'!</div>
           {items.map((item, idx) => <Item key={idx} item={item} doHandleClick={() => doHandleClick(item)} notHandleClick={() => notHandleClick(item)}/>)
           }
       </div>
    </div>
  )

}

export default ItemListContainer;

/*
useSelector(): Allows you to extract data from the Redux store state, using a selector function.
먼저 useSelector()는 컴포넌트와 state를 연결하는 메소드. 컴포넌트에서 useSelector 메소드를 통해 store의 state에 접근할 수 있다 

useDispatch():  Action 객체를 Reducer로 전달해주는 메소드. 클릭 등 Action이 일어나는 컴포넌트

*/