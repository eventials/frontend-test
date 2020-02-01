import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './styles.css'

function PessoaItem({people}) {
    const dispatch = useDispatch();
    let attPeople = useSelector(state => state.people);
    const country = useSelector(state => state.country);
    let excountry = useSelector(state => state.excountry);
  
    async function edit(){
      excountry = country;
      document.getElementById("editUser").value = people.id;
      document.getElementById("username").value = people.name;
      document.getElementById("username").focus();
      document.getElementById("labelName").textContent = "*Name (Editing)";
      document.getElementById("labelCountry").textContent = "Select your country (Editing)";
      dispatch({ type: 'UPDATE_COUNTRY', excountry});
    }

    async function delet(){//OK
      country.population -= 1;
      attPeople = attPeople.filter(item => item.id !== people.id);
      dispatch({ type: 'UPDATE_PEOPLE', attPeople});
    }
  
    return (//LOAD EACH INDIVIDUAL PERSON
        <li key={people.id} className="pessoa-item">
              <header>
                <img src={people.profilepic} alt="Imagem Avatar"/>
                <div className="user-info">
                <strong>{people.name} | ID: {people.id}</strong>
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