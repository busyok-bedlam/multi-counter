import {combineReducers} from 'redux';
import counters from './addReducer';
const counterApp = combineReducers({counters});
export default counterApp;
