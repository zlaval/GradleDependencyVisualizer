import React, {Component} from "react"
import DependencyGraph from "../container/dependency_graph"
import DependencyFilter from "../container/dependency_filter"

export default class DependencyView extends Component {

    render() {
        return (
            <div>
                <DependencyFilter/>
                <DependencyGraph/>
            </div>
        )
    }
}