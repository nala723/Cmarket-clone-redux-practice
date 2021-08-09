import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

/* store를 생성할 때 미들웨어를 적용
 미들웨어가 여러개인경우에는 파라미터로 여러개를 전달해주면 됩니다. 예: applyMiddleware(a,b,c)
 미들웨어의 순서는 여기서 전달한 파라미터의 순서대로 지정됩니다.
 https://velopert.com/3401 참고

 리덕스를 사용하는 어플리케이션에서 비동기 작업을 처리할 때 사용하는 가장 기본적인 미들웨어는 redux-thunk
 thunk란, 특정 작업을 나중에 하도록 미루기 위해서 함수 형태로 감싼 것 */