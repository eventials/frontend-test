import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import Cadastrar from './usersForm/cadastrar';
import ShowPeople from './usersForm/ShowPeople';

import './Css/global.css';
import './Css/App.css';
import './Css/Sidebar.css';
import './Css/Main.css';


function App() {

  return (
    <div id="app">
    <Provider store={store}>
      <aside>
        <strong>Submit</strong>
        <Cadastrar/>
      </aside>

      <main>
        <ShowPeople/>
      </main>
      </Provider>
    </div>
  );
}

export default App;
