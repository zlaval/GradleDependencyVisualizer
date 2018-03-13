import axios from "axios"

export function setDirectory(dir, callback) {
    const URL = `http://localhost:11687/api/directory`
    //const URL = `http://${location.host}/api/directory`

    const config = {
        headers: {
            'Content-Type': 'text/plain'
        }
    };


    axios.post(URL, dir, config).then(function (response) {
        console.log(response)
        callback()
    })
}