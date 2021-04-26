import {GET_USER} from "./constant";

export const getUser = (params) => {
    console.log(params);
    return dispatch => {
        fetch(`/search/users?q=${params}`)
            .then(res => res.json())
            .then(data => dispatch({
                type: GET_USER,
                payload: {
                    items: data.items
                }
            }))
            .catch(err => {
                console.log(err)
            })
    }
};