import React from 'react';

import './styles.css'

function PessoaItem({people}) {
    return (
        <li key={people.name} className="pessoa-item">
          
              <header>
                <img src="https://image.flaticon.com/icons/png/512/17/17004.png" alt="Imagem Avatar"/>
                <div className="user-info">
                  <strong>{people.name}</strong>
                  <p>{people.country}</p>
                </div>
              </header>
        </li>
    );
}

export default PessoaItem;