// action types
export const ADD_TO_TODO = "ADD_TO_TODO"; //둘을 하나로 묶어도 되나? 모르겟다 일단
export const ADD_TO_NOTDO = "ADD_TO_NOTDO";
export const REMOVE_TODO = "REMOVE_TOD0";
export const SET_QUANITY = "SET_QUANITY";
export const NOTIFY = "NOTIFY";
export const ENQUEUE_NOTIFICATION = "ENQUEUE_NOTIFICATION";
export const DEQUEUE_NOTIFICATION = "DEQUEUE_NOTIFICATION";

//actions creator functions
// 액션 객체를 리턴하는 일반적인 액션 생성 함수
export const addTodo = (itemId) => {
 return {
   type: ADD_TO_TODO,
   payload: {
      quantity: 1,
      itemId
   }
 }
}

export const addNotdo = (itemId) => {
    return {
      type: ADD_TO_NOTDO,
      payload: {
         quantity: 1,
         itemId
      }
    }
}

export const removeTodo = (itemId) => {
  return {
    type: REMOVE_TODO,
    payload: {
        itemId
    }
  }
}

export const setQuanity = (itemId, quanity) => {
    return {
     type: SET_QUANITY,
     payload: {
         itemId,
         quanity
     }
  }
}

// setIimeout 이용한 비동기 : dispatch를 파라미터로 갖는 함수 리턴
// 비동기 : 액션을 구현한 후, dispatch를 이용해 다른 동기 액션을 호출합니다.
//enqueueNotification 메시지가 queue에 쌓임
//dequeueNotification 메시지가 queue에서 사라짐
export const notify = (message, dismissTime = 3000) => dispatch => {
  const uuid = Math.random()
  dispatch(enqueueNotification(message,dismissTime,uuid))
  setTimeout(()=>{
      dispatch(dequeueNotification())
  }, dismissTime)
}

export const enqueueNotification = (message, dismissTime, uuid) => {
  return {
      type: ENQUEUE_NOTIFICATION,
      payload: {
          message,
          dismissTime,
          uuid
      }
   }
}

export const dequeueNotification = () => {
  return {
      type: DEQUEUE_NOTIFICATION
  }
}