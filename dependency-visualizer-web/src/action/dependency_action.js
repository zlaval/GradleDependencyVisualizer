import axios from "axios"

//const URL = `http://${location.host}/api/dependencies`

const URL = `http://localhost:11687/api/dependencies/compile`

export const DEPENDENCIES = "DEPENDENCIES"

export function listDependencies() {
    console.log(URL)
    const request = axios.get(URL)
    return (dispatch) => {
        request.then(({data}) => {
            dispatch({
                type: DEPENDENCIES,
                payload: data
            })
        })
    }
}