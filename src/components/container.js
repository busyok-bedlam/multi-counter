import React from 'react';
import Counter from './counter';
import '../styles/container.css';
import { connect } from 'react-redux';
import {addAction} from '../actions/index';
const Container = ({counters,addCounter})=>{
  return(
    <div className="container">
      <span onClick={addCounter} className="addCounter">ADD</span>
      <div className="counters">
        {counters.map((item,index)=><Counter counter={counters[index]} />)}
      </div>
    </div>
  )
}
const mapStateToProps = state=>({counters: state.counters})
const mapDispatcToProps = dispatch =>({addCounter: ()=> dispatch(addAction())})
export default connect(mapStateToProps,mapDispatcToProps)(Container)
