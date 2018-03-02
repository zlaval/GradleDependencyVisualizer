import {combineReducers} from "redux"
import DependencyReducer from "./dependency_reducer"

const rootReducer = combineReducers({
    dependencies: DependencyReducer
})

export default rootReducer