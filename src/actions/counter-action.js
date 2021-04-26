import {DECREMENT, INCREMENT} from "./constant";

/*export const increment = (num) => {
    return {
        type: INCREMENT,
        payload: {
            num: num
        }

    }
};*/

export const increment = (num)=>{
    return dispatch => {
        return setTimeout(() =>{
            dispatch({
                type:INCREMENT,
                payload:{
                    num:num
                }
            })
        }, 1000)
    }
}

export const decrement = (num) =>{
    return {
        type: DECREMENT,
        payload: {
            num: num
        }
    }
};

