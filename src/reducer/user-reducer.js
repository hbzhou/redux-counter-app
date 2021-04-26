import {GET_USER} from "../actions/constant";

const initState = {
    items: []
};

export default function userReducer(state = initState, action) {
    switch (action.type) {
        case GET_USER: {
            return {
                ...state,
                items: action.payload.items
            }
        }
        default: {
            return state;
        }
    }
}