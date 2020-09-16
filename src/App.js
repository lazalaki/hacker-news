import React from 'react';
import './App.scss';
import View from './views';

import 'react-notifications-component/dist/theme.css';
import ReactNotification from 'react-notifications-component';
import { GlobalStoreProvider } from './store/global-store';

function App() {
  return (
    <div className="App">
      <GlobalStoreProvider>
        <ReactNotification />
        <View />
      </GlobalStoreProvider>
    </div>
  );
}

export default App;
