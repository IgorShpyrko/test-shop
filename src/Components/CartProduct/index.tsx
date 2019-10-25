import React, { FC, ReactElement } from 'react';

import './index.scss';

interface CartProduct {
  id: number;
  name: string;
}

const CartProduct: FC<CartProduct> = ({ name }): ReactElement => {
  return (
    <div>
      <span>
        {name}
      </span>
    </div>
  );
};

export default CartProduct;
