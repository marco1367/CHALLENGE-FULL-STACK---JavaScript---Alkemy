const initialState = {
    AllOperations: [],
    TypesLoaded: [],
    msgNewOperation: {},
    LastOperations: [],
    msgUpdateOperation: {},
    msgDeleteOperation: {},
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
            if (action.payload === "") {
                return {
                    ...state,
                    msgUpdateOperation: {}
                }
            } else {
                return {
                    ...state,
                    msgUpdateOperation: action.payload
                }
            }

        case "DELETE_OPERATION":
            return {
                ...state,
                msgDeleteOperation: action.payload
            }


        default:
            return state;

    }


}

export default rootReducer;