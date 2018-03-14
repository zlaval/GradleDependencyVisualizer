import {combineReducers} from "redux"
import DependencyReducer from "./dependency_reducer"
import DirectoryListReducer from "./directory_list_reducer"

const rootReducer = combineReducers({
    dependencies: DependencyReducer,
    directories: DirectoryListReducer
})

export default rootReducer