import React, { FC, ReactElement } from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

import Main from 'Pages/Main';
import Aside from 'Containers/Aside';
import ShoppingCart from 'Components/ShoppingCart';

export type LinkParams = {
  name: string;
  title: string;
  to: string;
}

export const list: LinkParams[] = [
  {
    title: 'first',
    name: 'Shopping List',
    to: '/',
  },
  {
    title: 'second',
    name: 'Shopping Cart',
    to: '/cart',
  },
];

const App: FC = (): ReactElement => {
  return (
    <main>
      <Router>
        <Aside list={list} />
        <Switch>
          <Route path="/cart" component={ShoppingCart} />
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    </main>
  );
};

export default App;
