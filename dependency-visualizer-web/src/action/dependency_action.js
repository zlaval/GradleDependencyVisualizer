import axios from "axios"

const URL = `http://${location.host}/api/dependencies`

export const DEPENDENCIES = "DEPENDENCIES"

export function listDependencies() {
    console.log(URL)
    const request = axios.get(URL)
    return (dispatch) => {
        request.then((data) => {
            dispatch({
                type: DEPENDENCIES,
                payload: data
            })
        })
    }
}