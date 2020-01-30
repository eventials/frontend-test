import React from 'react';
import { useSelector } from 'react-redux';

import PessoaItem from '../usersForm/PessoaItem';

function ShowPeople(){
    let people = useSelector(state => state.people);
    const country = useSelector(state => state.country);

    return (
        // u1 represents every individual people
        <ul>
          {people.filter(function (pes) {
            return pes.country === country.name// returns a new array for the people that are registered in selected country
          }).map(function (pes) {  //map the new array to list items
            return <PessoaItem key={pes.id} people={pes}/> // unique key for each item
          })}
        </ul>
    );
}

export default ShowPeople;