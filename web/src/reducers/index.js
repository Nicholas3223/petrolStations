import { combineReducers } from 'redux';
import stationsReducer from './stationsReducer';

const rootReducer = combineReducers({
    stations: stationsReducer
})

export default rootReducer;
