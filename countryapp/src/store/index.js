import { createStore } from 'redux';
import pessoas from '../users/pessoa';

const INITIAL_STATE = {
    people: pessoas,
    country: ''
}

function reducer(state = INITIAL_STATE, action){
    switch (action.type){
        case 'CHANGE_COUNTRY':
            return { ...state, country: action.pais };
        case 'ADD_PEOPLE':
            return { ...state, people: [ ...state.people ]};
        case 'UPDATE_PEOPLE':
            console.log(action)
            return { ...state, people: action.attPeople };
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;