import * as constants from '../constants/index';
const counter = (state={},action)=>{
  switch(action.type){
    case constants.ADD_COUNTER:
      return {id: action.id, count: action.count};
    case constants.PLUS_COUNT :
      if(state.id!==action.id) return state;
      return {...state,count:state.count+=action.value};
    case constants.MINUS_COUNT :
      if(state.id!==action.id) return state;
      return {...state,count:state.count-=action.value};
    default : return state;
  }
}
  const counters = (state=[],action)=>{
    switch (action.type) {
      case constants.ADD_COUNTER :
       return [...state,counter(undefined,action)];
      case constants.PLUS_COUNT :
        return state.map(item=>counter(item,action))
      case constants.MINUS_COUNT :
        return state.map(item=>counter(item,action));
      case constants.REMOVE_COUNTER :
        return [...state.slice(0,action.id),...state.slice(action.id+1)];
      default: return state;
  }
}
export default counters;
