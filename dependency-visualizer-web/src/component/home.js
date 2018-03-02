import React, {Component} from "react"
import DependencyGraph from "../container/dependency_graph"

export default class Home extends Component {

    render() {
        return (
            <div>
                <DependencyGraph/>
            </div>
        )
    }
}