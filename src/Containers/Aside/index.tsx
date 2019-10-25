import React, { FC, ReactElement } from 'react';
import MainNav from 'Containers/MainNav';
import { LinkParams } from 'App';

import './index.scss';

declare interface Aside {
  list: LinkParams[];
}

const Aside: FC<Aside> = ({ list }): ReactElement => {
  return (
    <aside title='aside'>
      <MainNav list={list}/>
    </aside>
  );
};

export default Aside;
