import { combineReducers } from 'redux';

import goodsReducer from './goods';
import purchasesReducer from './purchases';

export default combineReducers({
  goods: goodsReducer,
  purchases: purchasesReducer,
});
