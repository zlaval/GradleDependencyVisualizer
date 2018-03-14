import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {applyMiddleware, createStore} from "redux"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import thunk from "redux-thunk"
import "./style.css"

import reducers from "./reducer"
import Home from "./component/home"
import DependencyView from "./component/dependency_view"

const store = createStore(
    reducers,
    applyMiddleware(thunk)
)


ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/dependencies" component={DependencyView}/>
                        <Route path="/" component={Home}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </Provider>
    </MuiThemeProvider>
    ,
    document.querySelector(".container")
)