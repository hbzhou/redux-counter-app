import * as actions from "../actions/constant";

const initialState = {
    counter: 10
};

export default function counter (state = initialState, action) {
    switch (action.type) {
        case actions.INCREMENT: {
            return {
                ...state,
                counter: state.counter + action.payload.num
            }
        }

        case actions.DECREMENT: {
            return {
                ...state,
                counter: state.counter - action.payload.num
            }
        }

        default: {
            return state;
        }

    }
}