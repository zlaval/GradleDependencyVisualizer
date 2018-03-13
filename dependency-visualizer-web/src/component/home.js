import React, {Component} from "react"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {setDirectory} from "../action/directory_action"

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {directory: ""}
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(event) {
        this.setState({directory: event.target.value})
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.setDirectory(this.state.directory, () => {
            this.props.history.push('/dependencies')
        })
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input className="form-control" value={this.state.directory} onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setDirectory}, dispatch)
}

export default connect(null, mapDispatchToProps)(Home)