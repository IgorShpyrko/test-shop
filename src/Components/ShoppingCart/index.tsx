import React, {
  FC,
  ReactElement,
  useCallback,
  useEffect,
} from 'react';
import { useMappedState } from 'redux-react-hook';

import localStorageService from 'services/localStorage';

import './index.scss';
import CartProduct from 'Components/CartProduct';

const ShoppingCart: FC = (): ReactElement => {
  const mapState = useCallback(
    (state) => ({
      purchases: state.purchases,
    }),
    [],
  );

  const { purchases } = useMappedState(mapState);

  useEffect(
    () => {
      localStorageService.setItem({ name: 'purchases', value: purchases });
    },
    [purchases],
  );

  return (
    <section className='shopping-list' title='shopping-list'>
      <h3>ShoppingList</h3>
      {purchases.map((product: any) => {
        return (
          <CartProduct key={product.id} {...product} />
        );
      })}
    </section>
  );
};

export default ShoppingCart;
