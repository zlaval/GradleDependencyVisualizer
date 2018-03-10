import React, {Component} from "react"
import {connect} from "react-redux";
import Tree from 'react-d3-tree'
import isEmptyObject from 'is-empty-object'
import ToolTip from "react-portal-tooltip";


const containerStyles = {
    width: '99vw',
    height: '95vh',
}
const tooltipStyles = {
    height: '5vh',
}


class DependencyGraph extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isTooltipActive: false,
            toolTipText: ""
        }
        this.onMouseOver = this.onMouseOver.bind(this)
        this.showTooltip = this.showTooltip.bind(this)
        this.hideTooltip = this.hideTooltip.bind(this)
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

    onMouseOver(node) {
        console.log(node)
        this.setState({toolTipText: node.name})
        this.showTooltip()
    }

    onMouseOut() {
        this.hideTooltip()
    }

    showTooltip() {
        console.log("show tooltip")
        this.setState({isTooltipActive: true})
        console.log(" tooltip" + this.state.isTooltipActive)
    }

    hideTooltip() {
        this.setState({isTooltipActive: false})
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
            graph = <Tree id="treeData" data={[this.props.dependencies]}
                          nodeSvgShape={svgSquare}
                          initialDepth={0}
                          pathFunc={"diagonal"}
                          depthFactor={300}
                          translate={this.state.translate}
                          onMouseOver={this.onMouseOver}
                //onMouseOut={this.onMouseOut}
            />
        }

        return (
            <div>
                <div style={tooltipStyles}>
                    <ToolTip active={this.state.isTooltipActive} position="top" arrow="center" parent="#treeData">
                        {this.state.toolTipText}
                    </ToolTip>
                </div>
                <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
                    {graph}
                </div>
            </div>
        )
    }

}

function mapStateToProp({dependencies}) {
    return {dependencies}
}

export default connect(mapStateToProp)(DependencyGraph)