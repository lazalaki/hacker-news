import React from 'react';
import './App.scss';
import View from './views';

import 'react-notifications-component/dist/theme.css';
import ReactNotification from 'react-notifications-component';
import { GlobalStoreProvider } from './store/global-store';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <GlobalStoreProvider>
        <Navbar />
        <ReactNotification />
        <View />
      </GlobalStoreProvider>
    </div>
  );
}

export default App;
