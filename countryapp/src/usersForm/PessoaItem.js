import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './styles.css'

function PessoaItem({people}) {
    const dispatch = useDispatch();
    let attPeople = useSelector(state => state.people);
    const country = useSelector(state => state.country);

    async function edit(){
      document.getElementById("username").value = people.name;
      document.getElementById("username").focus();
    }

    async function delet(){
      country.population -= 1;
      attPeople = attPeople.filter(item => item.id !== people.id);
      dispatch({ type: 'UPDATE_PEOPLE', attPeople});
    }
  
    return (
        <li key={people.name} className="pessoa-item">
              <header>
                <img src="https://image.flaticon.com/icons/png/512/17/17004.png" alt="Imagem Avatar"/>
                <div className="user-info">
                  <strong>{people.name}</strong>
                  <span>{people.country}</span>
                  <br/>
                  <label id="x" onClick={edit} >Edit</label>
                  <label> | </label>
                  <label id="x" onClick={delet}>Delete</label>
                </div>
              </header>
        </li>
    );
}

export default PessoaItem;