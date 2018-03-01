import React, {Component} from "react"
import * as d3 from "d3"

export default class Home extends Component {

    constructor(props) {
        super(props)
        this.createShape = this.createShape.bind(this)
    }

    componentDidMount() {
        this.createShape()
    }

    createShape() {
        const svg = d3.select("svg")
        svg.append("circle")
            .attr("cx", 25)
            .attr("cy", 25)
            .attr("r", 25)
            .style("fill", "blue")
    }

    render() {
        return (
            <div>
                <svg ref={node => this.node = node} width={1600} height={1900}/>
            </div>
        )
    }
}