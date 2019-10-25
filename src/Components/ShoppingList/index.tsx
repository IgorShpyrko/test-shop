import React, {
  FC,
  ReactElement,
  useEffect,
  useCallback,
} from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import actionTypes from 'store/types';
import Product from 'Components/Product';

import './index.scss';

const ShoppingList: FC = (): ReactElement => {
  const dispatch = useDispatch();

  const mapState = useCallback(
    (state) => ({
      goods: state.goods,
    }),
    [],
  );

  const { goods } = useMappedState(mapState);

  useEffect(
    () => {
      dispatch({
        type: actionTypes.getGoods,
      });
    },
    [],
  );

  return (
    <section className='shopping-list' title='shopping-list'>
      <h3>ShoppingList</h3>
      {goods.map((product: any) => {
        return (
          <Product key={product.id} {...product} />
        );
      })}
    </section>
  );
};

export default ShoppingList;
