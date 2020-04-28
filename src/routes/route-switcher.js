import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'
import PageLoading from '@/components/page-loading'

const Home = loadable(() => import('./home'), {fallback: <PageLoading />})
const Page404 = loadable(() => import('./404'), {fallback: <PageLoading />})

export default class RouteSwitcher extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <Page404 />
                </Route>
            </Switch>
        )
    }
}

