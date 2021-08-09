import { REMOVE_TODO, ADD_TO_TODO, ADD_TO_NOTDO, SET_QUANITY } from '../actions/index';
import { initialState } from './initialState';

const itemReducer = (state = initialState, action) => {

    switch (action.type) {
      case ADD_TO_TODO:
        return Object.assign({},state,{
            todos : [...state.todos, action.payload]
        })
      case ADD_TO_NOTDO:
        return Object.assign({}, state, {
            notTodos : [...state.notTodos, action.payload]
        })
      case REMOVE_TODO:  
      // return안에서 map등으로 id비교해서 notodo에 있으면 로직진행 아니면 todo랑 
        return Object.assign({}, state, {
          todos : state.todos.filter(todo => todo.itemId !== action.payload.itemId)
        })
      case SET_QUANITY:
        let idx = state.todos.findIndex(todo=> todo.itemId === action.payload.itemId)  
        return Object.assign({}, state, {
            todos: [...state.todos.slice(0,idx),action.payload, 
            ...state.todos.slice(idx+1)]
        }) 
        default:
            return state;

    }

}

export default itemReducer;

//   return Object.assign({}, state, {
//   todos : state.todos.filter(todo => todo.itemId !== action.payload.itemId)
// })