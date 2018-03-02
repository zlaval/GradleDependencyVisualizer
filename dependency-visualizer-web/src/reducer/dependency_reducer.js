import {DEPENDENCIES} from "../action/dependency_action";

export default function (state = [], action) {
    switch (action.type) {
        case DEPENDENCIES:
            return action.payload
    }
    return state
}