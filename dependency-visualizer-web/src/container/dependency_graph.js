import React, {Component} from "react"
import {connect} from "react-redux";
import {listDependencies} from "../action/dependency_action"
import * as d3 from "d3"

class DependencyGraph extends Component {

    constructor(props) {
        super(props)
        this.createGraph = this.createGraph.bind(this)
    }

    componentWillMount() {
        this.props.listDependencies()
    }

    componentDidMount() {
        this.createGraph()
    }

    componentDidUpdate() {
        console.log("update DependencyGraph")
        this.createGraph()
    }

    createGraph() {
        const svg = d3.select("svg")
        svg.append("circle")
            .attr("cx", 25)
            .attr("cy", 25)
            .attr("r", 25)
            .style("fill", "blue")
    }

    render() {
        if (this.props.dependencies.length == 0) {
            return <div>Loading data...</div>
        }

        return (
            <div>
                <svg ref={node => this.node = node} width={1600} height={1900}/>
            </div>
        )
    }
}

function mapStateToProp({dependencies}) {
    return {dependencies}
}

export default connect(mapStateToProp, {listDependencies})(DependencyGraph)