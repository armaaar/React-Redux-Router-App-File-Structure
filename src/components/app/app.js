import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import './app.css'

import connectWithRouter from '../../utils/connect-with-router'
import createAutoSelector from '../../utils/auto-selector'
import { changeName } from '../../actions/name-actions'

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" onClick={(e) => props.onNameChange("7amada")} />
        <p>
            Hello <code>{props.name}</code>!
        </p>
        <Link
          className="App-link"
          to="/7amada"
        >
          Learn React
        </Link>
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

export default connectWithRouter(App, mapStateToProps, mapActionsToProps);
