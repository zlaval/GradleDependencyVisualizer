import React, {Component} from "react"
import {connect} from "react-redux";
import {listDependencies} from "../action/dependency_action"
import Tree from 'react-d3-tree'


class DependencyGraph extends Component {

    componentWillMount() {
        this.props.listDependencies()
    }

    render() {
        if (this.props.dependencies.length == 0) {
            return <div>Loading data...</div>
        }

        const svgSquare = {
            "shape": "rect",
            "shapeProps": {
                "width": 200,
                "height": 30,
                "y": -25,
                "x": 0
            }
        }

        return (
            <div id="treeWrapper" style={{width: '100em', height: '50em'}}>
                <Tree data={[this.props.dependencies]} nodeSvgShape={svgSquare} pathFunc="diagonal" initialDepth="0" depthFactor={300}/>
            </div>
        )
    }

}

function mapStateToProp({dependencies}) {
    return {dependencies}
}

export default connect(mapStateToProp, {listDependencies})(DependencyGraph)