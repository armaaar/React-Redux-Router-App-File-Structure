import React from 'react'
import MetaTags from 'react-meta-tags';
import logo from '@/assets/images/logo.svg'
import './home.css'

import connectWithRouter from '@/utils/connect-with-router'
import createAutoSelector from '@/utils/auto-selector'
import { changeName } from '@/actions/name-actions'
import AppLink from '@/components/app-link';

function Home (props) {
  return (
    <div className="App">
        <MetaTags>
            <title>Cool React App</title>
        </MetaTags>
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" onClick={(e) => props.onNameChange("7amada")} />
            <p>
                Hello <code>{props.name}</code>!
            </p>
            <AppLink to="/7amada" />
        </header>
    </div>
  );
}

const mapStateToProps = createAutoSelector(
    state => state.name,
    (name) => ({
        name
    })
)

const mapActionsToProps = {
    onNameChange: changeName
}

export default connectWithRouter(Home, mapStateToProps, mapActionsToProps);
