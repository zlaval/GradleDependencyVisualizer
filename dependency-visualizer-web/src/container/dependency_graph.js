import React, {Component} from "react"
import {connect} from "react-redux";
import {listDependencies} from "../action/dependency_action"
import * as d3 from "d3"


class DependencyGraph extends Component {

    constructor(props) {
        super(props)
        this.createDependencyGraph = this.createDependencyGraph.bind(this)
    }

    componentWillMount() {
        this.props.listDependencies()
    }

    componentDidUpdate() {
        console.log("update DependencyGraph")
        this.createDependencyGraph(this.props.dependencies)
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

    createDependencyGraph(deps) {
        const svg = d3.select("svg")
        let i = 0
        const duration = 750
        const root = deps
        const tree = d3.layout.tree()
            .size([height, width]);
        const diagonal = d3.svg.diagonal()
            .projection(function (d) {
                return [d.y, d.x];
            });

        root.x0 = height / 2;
        root.y0 = 0;
        let nodes = tree.nodes(root).reverse(),
            links = tree.links(nodes);
        // Normalize for fixed-depth.
        nodes.forEach(function (d) {
            d.y = d.depth * 250;
        });
        // Update the nodes…
        let node = svg.selectAll("g.node")
            .data(nodes, function (d) {
                return d.id || (d.id = ++i);
            });
        // Enter any new nodes at the parent's previous position.
        let nodeEnter = node.enter().append("g")
            .attr("class", "node")
            .attr("transform", function (d) {
                return "translate(" + source.y0 + "," + source.x0 + ")";
            })
            .on("click", click);
        nodeEnter.append("circle")
            .attr("r", 1e-6)
            .style("fill", function (d) {
                return d._children ? "lightsteelblue" : "#fff";
            });
        nodeEnter.append("text")
            .attr("x", function (d) {
                return d.children || d._children ? -13 : 13;
            })
            .attr("dy", ".35em")
            .attr("text-anchor", function (d) {
                return d.children || d._children ? "end" : "start";
            })
            .text(function (d) {
                return d.name;
            })
            .style("fill-opacity", 1e-6);
        // Transition nodes to their new position.
        let nodeUpdate = node.transition()
            .duration(duration)
            .attr("transform", function (d) {
                return "translate(" + d.y + "," + d.x + ")";
            });
        nodeUpdate.select("circle")
            .attr("r", 10)
            .style("fill", function (d) {
                return d._children ? "lightsteelblue" : "#fff";
            });
        nodeUpdate.select("text")
            .style("fill-opacity", 1);
        // Transition exiting nodes to the parent's new position.
        let nodeExit = node.exit().transition()
            .duration(duration)
            .attr("transform", function (d) {
                return "translate(" + source.y + "," + source.x + ")";
            })
            .remove();
        nodeExit.select("circle")
            .attr("r", 1e-6);
        nodeExit.select("text")
            .style("fill-opacity", 1e-6);
        // Update the links…
        let link = svg.selectAll("path.link")
            .data(links, function (d) {
                return d.target.id;
            });
        // Enter any new links at the parent's previous position.
        link.enter().insert("path", "g")
            .attr("class", "link")
            .attr("d", function (d) {
                let o = {x: source.x0, y: source.y0};
                return diagonal({source: o, target: o});
            });
        // Transition links to their new position.
        link.transition()
            .duration(duration)
            .attr("d", diagonal);
        // Transition exiting nodes to the parent's new position.
        link.exit().transition()
            .duration(duration)
            .attr("d", function (d) {
                let o = {x: source.x, y: source.y};
                return diagonal({source: o, target: o});
            })
            .remove();
        // Stash the old positions for transition.
        nodes.forEach(function (d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });
    }


}

function mapStateToProp({dependencies}) {
    return {dependencies}
}

export default connect(mapStateToProp, {listDependencies})(DependencyGraph)