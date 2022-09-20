import { csrfFetch } from "./csrf";

const LOAD_ALL_SPOTS = 'spots/loadallspots';
const LOAD_ONE_SPOT = 'spots/loadonespot';
const REMOVE_SPOT = 'spots/deletespot';
const CREATE_SPOT = 'spots/createspot';
const UPDATE_SPOT = 'spots/updatespot';

export const loadAllSpots = (spots) => {
    return {
        type: LOAD_ALL_SPOTS,
        spots
    }
};

export const loadOneSpot = (spot) => {
    return {
        type: LOAD_ONE_SPOT,
        spot
    }
};

export const createOneSpot = (spot) => {
    return {
        type: CREATE_SPOT,
        spot
    }
};

export const updateOneSpot = (spot) => {
    return {
        type: UPDATE_SPOT,
        spot
    }
};

export const removeSpot = (spotId) => {
    return {
        type: REMOVE_SPOT,
        spotId
    }
}


// getAllSpots thunk
export const getAllSpots = () => async dispatch => {
    const response = await fetch(`api/spots`);

    if (response.ok) {
        const data = await response.json();
        console.log('in getAllSpots thunk++++++', data)
        dispatch(loadAllSpots(data.Spots))
        return data
    }
}

// getOneSpot thunk
export const getOneSpot = (spotId) => async dispatch => {
    const response = await csrfFetch(`api/spots/${spotId}`)
    console.log('in getOneSpot thunk------', response)

    if (response.ok) {
        const data = await response.json();
        dispatch(loadOneSpot(data))
        return data
    } else {
        console.log("errors in getOneSpot thunk")
    }
};

// deleteSpot thunk
export const deleteSpot = (spotId) => async dispatch => {
    const response = await csrfFetch(`api/spots/${spotId}`, {
        method: 'DELETE'
    });
    console.log('in deleteSpot thunk********', response)

    if (response.ok) {
        dispatch(removeSpot(spotId))
    } else {
        console.log("errors in removeSpot thunk")
    }
}

// createSpot thunk
export const createSpot = (spot) => async dispatch => {
    const response = await csrfFetch(`api/spots`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(spot)
    });

    if (response.ok) {
        const newSpot = await response.json();
        console.log('in createSpot thunk=======', newSpot);
        dispatch(createOneSpot(newSpot))
        return newSpot
    } else {
        console.log("errors in createSpot thunk")
    }
};

//updateSpot thunk
export const updateSpot = (data) => async dispatch => {
    const response = await csrfFetch(`api/spots/${data.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        const updated = await response.json();
        console.log('in createSpot thunk///////', updated);
        dispatch(updateOneSpot(updated));
        return updated;
    } else {
        console.log("errors in updateSpot thunk")
    }
}



const initialState = {
    allSpots: {
        // spotId: {},
        //optionalOrderedList: [],
    },
    singleSpot: {
    //     spotData: {},
    //     SpotImages: [],
    //     Owner: {},
    },
}

const spotsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_ALL_SPOTS:
            newState = { ...state, allSpots: { ...action.spots } };
            return newState;
        // case LOAD_ONE_SPOT:
        //     newState = { ...state.singleSpot, spotData: { ...action.spot } };
        //     return newState;
        // case REMOVE_SPOT:
        //     newState = {...state};
        //     delete newState.allSpots[action.spotId];
        //     return newState;
        // case CREATE_SPOT:
        //     newState = { ...state, allSpots: { ...state.allSpots, [action.spot.id]: action.spot } };
        //     return newState;
        // case UPDATE_SPOT:
        //     newState = { ...state, allSpots:{ [action.spot.id]: {...state[action.spot.id]}, ...action.spot} };
        //     return newState;
        default:
            return state;
    }
}

export default spotsReducer;