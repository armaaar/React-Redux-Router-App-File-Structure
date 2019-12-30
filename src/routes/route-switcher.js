import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'
import MetaTags from 'react-meta-tags';

const Home = loadable(() => import('./home'))

export default class RouteSwitcher extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <MetaTags>
                        <title>404 Not Found</title>
                    </MetaTags>
                    <h1>There Is No Match.</h1>
                </Route>
            </Switch>
        )
    }
}

