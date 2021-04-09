import { connect } from 'frontity'
import React from 'react'
import Link from '@frontity/components/link'
import Logo from '../assets/logo.svg'

const Error = ({ state }) => {
    const home = () => {
        window.location.href = '/'
    }

    return (
        <div className="text-center">
            <img src={Logo} className="bg-dark" height="125"/>
            <h1><strong>404 Not Found</strong></h1>
            <p>Url <strong>{state.router.link}</strong> does not exist, try another URL</p>
            <button onClick={home} className="btn btn-dark">Back to home</button>
        </div>
    )
}

export default connect(Error)