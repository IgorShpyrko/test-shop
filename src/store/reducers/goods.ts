import { AnyAction } from 'redux';

import actionTypes, { Product } from 'store/types';


const initialState: Product[] = [];

export default (state = initialState, action: AnyAction): Product[] => {
  switch (action.type) {
    case actionTypes.setGoods:
      return action.payload;

    case actionTypes.resetGoods:

      return state.filter((product: Product) => product.id !== action.payload.id);

    default:
      return state;
  }
};
