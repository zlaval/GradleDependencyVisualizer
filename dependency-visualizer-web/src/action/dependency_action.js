import axios from "axios"

export const DEPENDENCIES = "DEPENDENCIES"

export function listDependencies(scope, groupId) {
    let filter = ''
    if (groupId)
        filter = `?groupId=${groupId}`

    const URL = `http://localhost:11687/api/dependencies/${scope}${filter}`
    //const URL = `http://${location.host}/api/dependencies/${scope}${filter}`
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