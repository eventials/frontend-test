import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

// data

import ShowPeople from './usersForm/ShowPeople';
import { useEffect } from 'react';
import SideScreen from './usersForm/SideScreen';

// style

import './Css/global.css';
import './Css/App.css';
import './Css/Sidebar.css';
import './Css/Main.css';


function App() {

  useEffect(() => {
    document.getElementById("TITLE").textContent = "Submit";
  }, [])

  return (
    <div id="app">
    {/* redux */}
    <Provider store={store}>
      <aside>
        <strong id="TITLE"></strong>
        <SideScreen/>
      </aside>

      <main>
        <ShowPeople/>
      </main>
    </Provider>

    </div>
  );
}

export default App;
