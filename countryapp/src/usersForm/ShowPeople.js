import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import PessoaItem from '../usersForm/PessoaItem';
import pessoa from '../users/pessoa';

function ShowPeople({}){

    const country = useSelector(state => state.country);

    return (
        <ul>
          {pessoa.filter(function (pes) {
            return pes.country === country.name// returns a new array
          }).map(function (pes) {  //map the new array to list items
            return <PessoaItem key={pes.name} people={pes}/> // don't forget unique key for each item
          })}
        </ul>
    );
}

export default ShowPeople;