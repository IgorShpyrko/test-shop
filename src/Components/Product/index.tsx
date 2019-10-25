import React, { FC, ReactElement, useCallback } from 'react';
import { useDispatch } from 'redux-react-hook';
import actionTypes from 'store/types';

import './index.scss';

interface ProductProps {
  id: number;
  name: string;
}

const Product: FC<ProductProps> = ({ id, name }): ReactElement => {
  const dispatch = useDispatch();

  const handleClick = useCallback(
    () => {
      dispatch({
        type: actionTypes.addProductToChart,
        payload: {
          id,
          name,
        },
      });
    },
    [id],
  );

  return (
    <div>
      <span>
        {name}
      </span>
      <button onClick={handleClick}>
        add to chart
      </button>
    </div>
  );
};

export default Product;
