const initialState = {
    newValue: ''
}

const clickReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CLICK_UPDATE_VALUE':
            return {
                ...state,
                newValue: action.newValue
            };
            default: 
                return state;
    }
}

export default clickReducer;

// IMPORTANTE: esta função deverá ser pura, ou seja, 
// retornar um novo objeto, pois lembrando, a Store é imutável. 
// Conseguimos preservar o restante do estado usando o ...state, 
// que recupera o estado anterior e passa para o novo objeto.
