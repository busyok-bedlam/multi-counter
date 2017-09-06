import * as constants from '../constants/index';
let INITIAL_ID = 0;
const addAction = ()=>{
//  if(INITIAL_ID>4) return {type:"null"};
    return {
      type: constants.ADD_COUNTER,
      id: INITIAL_ID++,
      count: constants.INITIAL_COUNTER
    }
};
const removeAction  = id         => ({type: constants.REMOVE_COUNTER,id});
const plusAction    = (value,id) => ({type: constants.PLUS_COUNT,value,id});
const minusAction   = (value,id) => ({type: constants.MINUS_COUNT,value,id});

export {addAction,plusAction,minusAction,removeAction};
