import React from 'react'
import { Navbar } from '../components/Navbar'
require('./appLayout.css')

const header = (
    <div>
        <div className="header"></div>
        <div className="title-img">
            <div className="hightlight"></div>
            <div className="headline">
                <h1>LairKeeper</h1>
            </div>
        </div>
    </div>
)

const AppLayout = ({ children }) => (
    <div>
        <Navbar />
        <div className="container">{children}</div>
    </div>
)

export default AppLayout
