import React, {Component} from "react"
import {connect} from "react-redux";
import {listDependencies} from "../action/dependency_action"
import Tree from 'react-d3-tree'


const containerStyles = {
    width: '100vw',
    height: '100vh',
}

class DependencyGraph extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentWillMount() {
        this.props.listDependencies()
    }

    componentDidMount() {
        const dimensions = this.treeContainer.getBoundingClientRect();
        this.setState({
            translate: {
                x: dimensions.width / 2,
                y: dimensions.height / 2
            }
        })
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
            <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
                <Tree data={[this.props.dependencies]}
                      nodeSvgShape={svgSquare}
                      pathFunc="diagonal"
                      initialDepth={0}
                      depthFactor={300}
                      translate={this.state.translate}
                />
            </div>
        )
    }

}

function mapStateToProp({dependencies}) {
    return {dependencies}
}

export default connect(mapStateToProp, {listDependencies})(DependencyGraph)