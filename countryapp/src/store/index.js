import { createStore } from 'redux';

const INITIAL_STATE = {
    country: ''
}

function reducer(state = INITIAL_STATE, action){
    switch (action.type){
        case 'CHANGE_COUNTRY':
            return { ...state, country: action.pais };
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;