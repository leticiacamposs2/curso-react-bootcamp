//reducer para setar o tipo de todo listado no app
//pense sempre o que está setado como default na store (state) e que você deve alterar esse estado

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter