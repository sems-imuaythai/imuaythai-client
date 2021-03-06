import * as actionTypes from '../actions/types/dictionaries/contestRangesTypes';
export default function reducer(state = {
    ranges: [],
    fetching: false,
    fetched: false,
    error: null
}, action) {

    switch (action.type) {
    case actionTypes.FETCH_RANGES:
    {
        return {
            ...state,
            fetching: true
        };
    }

    case actionTypes.FETCH_RANGES_REJECTED:
    {
        return {
            ...state,
            fetching: false,
            error: action.payload
        };
    }

    case actionTypes.FETCH_RANGES_FULFILLED:
    {
        return {
            ...state,
            fetching: false,
            fetched: true,
            ranges: action.payload
        };
    }

    case actionTypes.SAVE_RANGE:
    {

        const range = action.payload;
        const newRanges = [...state.ranges];
        const rangeToUpdate = newRanges.findIndex(t => t.id === range.id);
        if (rangeToUpdate > -1) {
            newRanges[rangeToUpdate] = range;
            return {
                ...state,
                ranges: newRanges
            };
        } else {
            return {
                ...state,
                ranges: [...state.ranges, range]
            };
        }

    }

    case actionTypes.DELETE_RANGE_SUCCESS:
    {
        return {
            ...state,
            ranges: state
                .ranges
                .filter(t => t.id !== action.payload)
        };
    }
    case actionTypes.DELETE_RANGE_REJECTED:
        return {
            ...state,
            ranges: state.ranges,
            error: action.payload
        };
    default:
        return state;
    }
}