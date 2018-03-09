import React, {Component} from "react"
import {connect} from "react-redux";
import Tree from 'react-d3-tree'
import isEmptyObject from 'is-empty-object'


const containerStyles = {
    width: '99vw',
    height: '95vh',
}

class DependencyGraph extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        const dimensions = this.treeContainer.getBoundingClientRect();
        this.setState({
            translate: {
                x: dimensions.width / 20,
                y: dimensions.height / 2
            }
        })
    }

    render() {
        const svgSquare = {
            "shape": "rect",
            "shapeProps": {
                "width": 210,
                "height": 76,
                "y": -25,
                "x": 0
            }
        }

        let graph = null
        if (isEmptyObject(this.props.dependencies)) {
            graph = ""
        } else {
            graph = <Tree data={[this.props.dependencies]}
                          nodeSvgShape={svgSquare}
                          initialDepth={0}
                          pathFunc={"diagonal"}
                          depthFactor={300}
                          translate={this.state.translate}
            />
        }

        return (
            <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
                {graph}
            </div>
        )
    }

}

function mapStateToProp({dependencies}) {
    return {dependencies}
}

export default connect(mapStateToProp)(DependencyGraph)