import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

// data

import Cadastrar from './usersForm/cadastrar';
import ShowPeople from './usersForm/ShowPeople';

// style

import './Css/global.css';
import './Css/App.css';
import './Css/Sidebar.css';
import './Css/Main.css';


function App() {

  return (
    <div id="app">
    {/* redux */}
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
