import React, {Component} from "react"
import {connect} from "react-redux";
import {listDirectories, selectDirectory} from '../action/directory_action'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import {bindActionCreators} from "redux";


class DependencyListTable extends Component {

    constructor(props) {
        super(props)
        this.onRowSelection = this.onRowSelection.bind(this)
    }

    componentWillMount() {
        this.props.listDirectories()
    }

    renderTableRows(directory) {
        return (
            <TableRow key={directory.name}>
                <TableRowColumn>{directory.name}</TableRowColumn>
                <TableRowColumn>{directory.dir}</TableRowColumn>
            </TableRow>
        )
    }

    onRowSelection(rowNumber,) {
        const element = this.props.directories[rowNumber]
        this.props.selectDirectory(element, () => {
            this.props.history.push('/dependencies')
        })
    }

    render() {

        if (this.props.directories.length === 0) {
            return <div></div>
        }

        return (
            <Table onRowSelection={this.onRowSelection}>
                <TableHeader displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Directory</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {this.props.directories.map(this.renderTableRows)}
                </TableBody>
            </Table>
        )
    }

}


function mapStateToProp({directories}) {
    return {directories}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({listDirectories, selectDirectory}, dispatch)
}


export default connect(mapStateToProp, mapDispatchToProps)(DependencyListTable)