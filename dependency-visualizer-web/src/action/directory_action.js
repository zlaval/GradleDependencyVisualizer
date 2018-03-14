import axios from "axios"

const URL = `http://localhost:11687/api/directory`
//const URL = `http://${location.host}/api/directory`

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};

export function selectDirectory(directory, callback) {
    axios.post(URL + "/select", directory, config).then(function (response) {
        console.log(response)
        callback()
    })
}

export const ADD_DIRECTORY = "ADD_DIRECTORY"

export function setDirectory(name, dir) {

    const data = {
        name: name,
        dir: dir
    }

    const request = axios.post(URL, data, config)
    return (dispatch) => {
        request.then(({data}) => {
            console.log(data)
            dispatch({
                type: ADD_DIRECTORY,
                payload: data
            })
        })
    }
}

export const DIRECTORY_LIST = "DIRECTORY_LIST"

export function listDirectories() {
    const request = axios.get(URL)
    return (dispatch) => {
        request.then(({data}) => {
            dispatch({
                type: DIRECTORY_LIST,
                payload: data
            })
        })
    }
}
