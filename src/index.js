import React from 'react';
import {StatusBar} from 'react-native';

import Main from './pages/Main';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Main />
    </>
  );
}
