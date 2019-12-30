import React from 'react'
import App from '../../components/app'
import MetaTags from 'react-meta-tags';

export default function Home () {
    return (
        <div>
        <MetaTags>
            <title>Cool React App</title>
        </MetaTags>
            <App />
        </div>
    )
}
