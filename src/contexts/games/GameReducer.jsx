const reducer = (globalState, action) => {
    switch(action.type) {
        case "OBTENER-JUEGOS":
            return {
                ...globalState,
                games: action.payload
            }
        default:
            return globalState
    }
}

export default reducer