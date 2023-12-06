import axios from 'axios';
import {
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL
}
    from "../constants/actions-types";

export const getUsers = () => async dispatch => {
    dispatch({
        type: GET_USERS,
    });
    try {
        const users = await axios.get('127.0.0.1:3500/user')
        dispatch({
            type: GET_USERS_SUCCESS,
            payload: users
        });


    } catch (error) {
        dispatch({
            type: GET_USERS_FAIL,
            payload: error.response.data
        })
    }

}