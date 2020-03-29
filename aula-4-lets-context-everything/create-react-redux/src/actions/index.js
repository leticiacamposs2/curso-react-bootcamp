import { CLICK_UPDATE_VALUE } from './actionTypes';

export const clickButton = value => ({
    type: CLICK_UPDATE_VALUE,
    newValue: value
});

// Aqui a função é a Action Creator, e o que ela retorna, que é o objeto, é a Action. 
// Ao ser disparada, ela comunicará ao Reducer que o type é CLICK_UPDATE_VALUE, 
// além do valor newValue: value que deverá ser atualizado na Store. 