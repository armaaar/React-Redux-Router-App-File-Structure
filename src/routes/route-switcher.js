import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'

const Home = loadable(() => import('./home'))

export default class RouteSwitcher extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <h1>There Is No Match.</h1>
                </Route>
            </Switch>
        )
    }
}

