import {INCREMENT,DECREMENT} from './AppActions'
const AppReducer=(state = 1, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      if(state==1) {
        return state;
      }
      return state - 1
    default:
      return state
  }
}

export default AppReducer;
