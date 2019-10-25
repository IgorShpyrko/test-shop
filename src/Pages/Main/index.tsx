import React, { FC, ReactElement } from 'react';
import ShoppingList from 'Components/ShoppingList';

import './index.scss';

const Main: FC = (): ReactElement => {
  return (
    <section title='main-section' className='main-section'>
      <ShoppingList />
    </section>
  );
};

export default Main;
