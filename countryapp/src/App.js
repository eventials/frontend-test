import React from 'react';

import pessoa from './users/pessoa';
import PessoaItem from './usersForm/PessoaItem';
import Cadastrar from './usersForm/cadastrar';

import './Css/global.css';
import './Css/App.css';
import './Css/Sidebar.css';
import './Css/Main.css';


function App() {

  return (
    <div id="app">
      <aside>
        <strong>Hello {pessoa.name} | Submit</strong>
        <Cadastrar/>
      </aside>

      <main>
        <ul>
          {pessoa.filter(function (pes) {
            return pes.country === 'BRAZIL' // returns a new array
          }).map(function (pes) {  //map the new array to list items
            return <PessoaItem key={pes.name} people={pes}/> // don't forget unique key for each item
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
