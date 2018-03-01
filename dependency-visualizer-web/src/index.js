import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {applyMiddleware, createStore} from "redux"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import thunk from "redux-thunk"
import "./style.css"

import reducers from "./reducer"
import Home from "./component/home"

const store = createStore(
    reducers,
    applyMiddleware(thunk)
)


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={Home}/>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    ,
    document.querySelector(".container")
)