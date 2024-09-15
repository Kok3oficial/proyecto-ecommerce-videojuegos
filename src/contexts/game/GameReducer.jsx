const reducer = (globalState, action) => {
    switch(action.type) {
        case "OBTENER-JUEGOS":
            return {
                ...globalState,
                juegos: action.payload
            }
        default:
            return globalState
    }
}

export default reducer