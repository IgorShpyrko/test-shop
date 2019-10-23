import { combineReducers } from 'redux';

import goodsReducer from './goods';

export default combineReducers({
  goods: goodsReducer,
});
