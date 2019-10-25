import { AnyAction } from 'redux';
import addUniqueObjToArray from 'helpers/addUniqueObjToArr';

import localStorageService from 'services/localStorage';
import actionTypes from 'store/types';

const initialState: number[] = localStorageService.getItem('purchases') || [];

export default (state = initialState, action: AnyAction): number[] => {
  switch (action.type) {
    case actionTypes.addProductToChart:
      return addUniqueObjToArray(state, action.payload)
        .sort((a: any, b: any) => {
          return (a.name[0] > b.name[0]) ? 1 : -1;
        });

    case actionTypes.removeProductFromChart:
      return state.filter((id: number) => id !== action.payload.id);

    default:
      return state;
  }
};
