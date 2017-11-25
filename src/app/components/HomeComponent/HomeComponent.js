import React, { Component } from 'react'
import { ErrorMessage } from '../shared'

class HomeComponent extends Component {

    render() {
        return (
            <div>
                <ErrorMessage />
                Welcome home!
            </div>
        )
    }
}

export default HomeComponent
