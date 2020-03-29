import { CLICK_UPDATE_VALUE } from '../actions/actionTypes';

const initialState = {
    newValue: ''
}

export const clickReducer = (state = initialState, action) => {
    switch(action.type) {
        case CLICK_UPDATE_VALUE:
            return {
                ...state,
                newValue: action.newValue
            };
            default: 
                return state;
    }
}

// IMPORTANTE: esta função deverá ser pura, ou seja, 
// retornar um novo objeto, pois lembrando, a Store é imutável. 
// Conseguimos preservar o restante do estado usando o ...state, 
// que recupera o estado anterior e passa para o novo objeto.
