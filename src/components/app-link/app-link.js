import React from 'react'
import { Link } from 'react-router-dom'
import './app-link.css'

export default function AppLink (props) {
  return (
    <Link
        className="App-link"
        to={props.to} >
        Learn React
    </Link>
  );
}
