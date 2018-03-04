import {DEPENDENCIES} from "../action/dependency_action";

export default function (state = {}, action) {
    switch (action.type) {
        case DEPENDENCIES:
            console.log(action.payload)
            return action.payload
    }
    return state
}