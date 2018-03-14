import {ADD_DIRECTORY, DIRECTORY_LIST} from "../action/directory_action";

export default function (state = [], action) {
    switch (action.type) {
        case DIRECTORY_LIST:
            return action.payload
        case ADD_DIRECTORY:
            return [...state, action.payload]
    }
    return state
}

