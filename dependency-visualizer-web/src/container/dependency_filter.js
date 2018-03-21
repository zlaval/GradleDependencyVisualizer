import React, {Component} from "react"
import {RadioButton, RadioGroup} from 'react-radio-buttons'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import IconButton from 'material-ui/IconButton';
import ContentReply from 'material-ui/svg-icons/content/reply';

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
        this.onBackButton = this.onBackButton.bind(this)
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

    onBackButton() {
        this.props.history.push('/')
    }

    render() {
        const styles = {
            largeIcon: {
                width: 36,
                height: 36,
            },
            large: {
                width: 42,
                height: 42,
                padding: 5,
                paddingLeft: 30
            }
        };

        return (
            <form onSubmit={this.onFormSubmit} className="filter-style input-group">

                <table width="90%">
                    <tbody>
                    <tr>
                        <td>
                            <b> Project name: {this.props.projectName} </b>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span className="input-group-btn">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </span>
                        </td>
                        <td>
                            <label>
                                GroupId:
                                <input value={this.state.groupId} onChange={this.onGroupIdChange}/>
                            </label>
                        </td>
                        <td>
                            <RadioGroup value={this.state.scope} onChange={this.onScopeRadioChange} horizontal>
                                <RadioButton value="all" rootColor="#090F0F" pointColor="blue">
                                    All
                                </RadioButton>
                                <RadioButton value="module" rootColor="#090F0F" pointColor="blue">
                                    Submodules only
                                </RadioButton>
                                <RadioButton value="compile" rootColor="#090F0F" pointColor="blue">
                                    Compile
                                </RadioButton>
                                <RadioButton value="compileOnly" rootColor="#090F0F" pointColor="blue">
                                    Compile only
                                </RadioButton>
                                <RadioButton value="runtime" rootColor="#090F0F" pointColor="blue">
                                    Runtime
                                </RadioButton>
                                <RadioButton value="test" rootColor="#090F0F" pointColor="blue">
                                    Test
                                </RadioButton>
                            </RadioGroup>
                        </td>
                        <td>
                            <IconButton onClick={this.onBackButton} iconStyle={styles.largeIcon} style={styles.large}
                                        tooltip="Back to directory select">
                                <ContentReply/>
                            </IconButton>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </form>
        )
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({listDependencies}, dispatch)
}

export default connect(null, mapDispatchToProps)(DependencyFilter)