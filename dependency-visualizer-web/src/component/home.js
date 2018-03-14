import React, {Component} from "react"
import DirectoryForm from "../container/directory_form"
import DirectoryList from "../container/directory_list"


export default class Home extends Component {
    render() {
        return (
            <div>
                <DirectoryForm/>
                <DirectoryList history={this.props.history}/>
            </div>
        )
    }
}