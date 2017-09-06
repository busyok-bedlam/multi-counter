import React from 'react';
import {connect} from 'react-redux';
import {plusAction,minusAction,removeAction} from '../actions/index';
import '../styles/counter.css';
const Counter = ({counter,dispatch})=>{
  const plus = () => {dispatch(plusAction(1,counter.id))};
  const minus = () => {dispatch(minusAction(1,counter.id))};
  const close = () => {dispatch(removeAction(counter.id))}
  return(
    <div className="counter">
      <span className="countId">ID:{counter.id}</span>
      <span onClick={minus} className="minus" role="img" aria-label="minus">&#10134;</span>
      <span className="counter-elem">{counter.count}</span>
      <span onClick={plus} className="plus" role="img" aria-label="plus">&#10133;</span>
      <span onClick={close} className="close" role="img" aria-label="close">&#10006;</span>
    </div>
  )
}
export default connect()(Counter);
