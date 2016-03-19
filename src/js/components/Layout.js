'use strict'

import React from 'react'

import Footer from './Footer'
import Header from './Header'

export default class Layout extends React.Component {
    constructor() {
        super()
        this.state = {
            name: 'Gerrit'
        }
    }


    render() {
        return (
            <div>
                <Header name={this.state.name} />
                    Hello {this.state.name}
                <Footer />
            </div>
        )
    }
}
