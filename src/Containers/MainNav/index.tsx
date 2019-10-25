import React, { FC, ReactElement } from 'react';
import { LinkParams } from 'App';
import { Link } from 'react-router-dom';

import './index.scss';

declare interface MainNav {
  list: LinkParams[];
}

const MainNav: FC<MainNav> = ({ list }): ReactElement => {
  return (
    <nav className='main-nav'>
      {list.map((link) => (
        <Link key={link.title} {...link} >{link.name}</Link>
      ))}
    </nav>
  );
};

export default MainNav;
