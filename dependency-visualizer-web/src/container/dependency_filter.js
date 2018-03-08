import React, {Component} from "react"
import {RadioButton, RadioGroup} from 'react-radio-buttons'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import {listDependencies} from "../action/dependency_action"

class DependencyFilter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            groupId: "",
            scope: "module"
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onGroupIdChange = this.onGroupIdChange.bind(this)
        this.onScopeRadioChange = this.onScopeRadioChange.bind(this)
    }

    onFormSubmit(event) {
        event.preventDefault()
        this.props.listDependencies(this.state.scope, this.state.groupId)
    }

    onGroupIdChange(event) {
        this.setState({groupId: event.target.value})
    }

    onScopeRadioChange(value) {
        this.setState({scope: value})
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="filter-style">
                <label>
                    Scope:
                    <RadioGroup value={this.state.scope} onChange={this.onScopeRadioChange} horizontal>
                        <RadioButton value="all" rootColor="black" pointColor="yellow">
                            All
                        </RadioButton>
                        <RadioButton value="module" rootColor="black" pointColor="yellow">
                            Submodules only
                        </RadioButton>
                        <RadioButton value="compile" rootColor="black" pointColor="yellow">
                            Compile
                        </RadioButton>
                        <RadioButton value="compileOnly" rootColor="black" pointColor="yellow">
                            Compile only
                        </RadioButton>
                        <RadioButton value="runtime" rootColor="black" pointColor="yellow">
                            Runtime
                        </RadioButton>
                        <RadioButton value="test" rootColor="black" pointColor="yellow">
                            Test
                        </RadioButton>
                    </RadioGroup>
                </label>
                <label>
                    GroupId:
                    <input value={this.state.groupId} onChange={this.onGroupIdChange}/>
                </label>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </span>
            </form>
        )
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({listDependencies}, dispatch)
}

export default connect(null, mapDispatchToProps)(DependencyFilter)