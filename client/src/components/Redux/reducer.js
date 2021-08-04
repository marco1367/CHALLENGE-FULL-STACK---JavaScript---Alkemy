const initialState = {
    AllOperations: [],
    TypesLoaded: [],
    msgNewOperation: {},
    LastOperations: [],
    msgUpdateOperation: {},

};


function rootReducer(state = initialState, action) {
    switch (action.type) {

        case "GET_TYPES":
            return {
                ...state,
                TypesLoaded: action.payload
            }

        case "POST_NEW_OPERATION":
            if (action.payload === "") {
                return {
                    ...state,
                    msgNewOperation: {}
                }
            } else {
                return {
                    ...state,
                    msgNewOperation: action.payload
                }
            }

        case "GET_LAST_OPERATIONS":
            return {
                ...state,
                LastOperations: action.payload
            }

        case "GET_ALL_OPERATIONS":
            return {
                ...state,
                AllOperations: action.payload
            }

        case "POST_UP_DATE_OPERATION":
            return {
                ...state,
                msgUpdateOperation: action.payload
            }


        default:
            return state;

    }


}

export default rootReducer;