import { host } from "../global"
import axios from "axios";
import * as actionTypes from './actionTypes';

export const fetchConstests = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.FETCH_CONTESTS
        })

        return axios.get(host + "api/contests/")
            .then((response) => {
                dispatch({
                    type: actionTypes.FETCH_CONTESTS_FULFILLED,
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: actionTypes.FETCH_CONTESTS_REJECTED,
                    payload: err
                })
            })
    }
}

export const fetchContest = (id) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.FETCH_SINGLE_CONTEST
        });

        return axios.get(host + "api/contests/" + id)
            .then((response) => {
                dispatch({
                    type: actionTypes.FETCH_SINGLE_CONTEST_FULFILLED,
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: actionTypes.FETCH_SINGLE_CONTEST_REJECTED,
                    payload: err
                })
            })
    }
}

export function addContest(contest) {
    return {
        type: actionTypes.ADD_NEW_CONTEST,
        payload: contest
    }
}

export const saveContest = (contest) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.SAVE_CONTEST,
            payload: contest
        });

        return axios.post(host + "api/contests/save", contest)
            .then((response) => {
                dispatch({
                    type: actionTypes.SAVE_CONTEST_SUCCESS,
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: actionTypes.SAVE_CONTEST_REJECTED,
                    payload: err.response != null
                        ? err.response.data
                        : "Cannot connect to server"
                })
            })
    }
}

export const fetchContestCandidates = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.FETCH_CONTEST_CANDIDATES
        })

        return axios.get(host + "api/contests/candidates")
            .then((response) => {
                dispatch({
                    type: actionTypes.FETCH_CONTEST_CANDIDATES_FULFILLED,
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: actionTypes.FETCH_CONTEST_CANDIDATES_REJECTED,
                    payload: err
                })
            })
    }
}

export function addContestRequest(request) {
    return {
        type: actionTypes.ADD_CONTEST_REQUEST,
        payload: request
    }
}

export function cancelContestRequest() {
    return {
        type: actionTypes.CANCEL_CONTEST_REQUEST
    }
}

export const saveContestRequest = (request) => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.SAVE_CONTEST,
        });

        return axios.post(host + "api/contests/requests/save", request)
            .then((response) => {
                dispatch({
                    type: actionTypes.SAVE_CONTEST_REQUEST_SUCCESS,
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: actionTypes.SAVE_CONTEST_REQUEST_REJECTED,
                    payload: err.response != null
                        ? err.response.data
                        : "Cannot connect to server"
                })
            })
    }
}

