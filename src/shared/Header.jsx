import { hot } from 'react-hot-loader/root'
import React from 'react';

function HeaderComponent(props) {
  return (
    <header>
      <h1>
        Reddit for out own
      </h1>
    </header>
  );
}

export const Header = hot(HeaderComponent);