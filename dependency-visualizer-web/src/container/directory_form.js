import React, {Component} from "react"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setDirectory} from "../action/directory_action"

class DirectoryForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            directory: ""
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onDirInputChange = this.onDirInputChange.bind(this)
        this.onNameInputChange = this.onNameInputChange.bind(this)
    }

    onDirInputChange(event) {
        this.setState({directory: event.target.value})
    }

    onNameInputChange(event) {
        this.setState({name: event.target.value})
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.setState({name: "", directory: ""});
        this.props.setDirectory(this.state.name, this.state.directory)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="form-inline">
                <div className="form-group">
                    <label htmlFor="nameInput">
                        Name:
                    </label>
                    <input id="nameInput" className="form-control" value={this.state.name}
                           onChange={this.onNameInputChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="directoryInput">
                        Directory path:
                    </label>
                    <input id="directoryInput" className="form-control" value={this.state.directory}
                           onChange={this.onDirInputChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setDirectory}, dispatch)
}

export default connect(null, mapDispatchToProps)(DirectoryForm)