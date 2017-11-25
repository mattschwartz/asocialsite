import React from 'react'
import { Link } from 'react-router-dom'
require('./navbar.css')

export default
class Navbar extends React.Component {

    render() {
        const idx = window.location.href.indexOf('#') + 1
        const url = window.location.href.substring(idx)

        const homeClassNames = `nav-item ${url === '/' ? 'active' : null}`;
        const serverInfoClassNames = `nav-item ${url.startsWith('/server-info') ? 'active' : null}`;

        return (
            <nav className="navbar navbar-toggleable-xl navbar-light bg-faded">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className={homeClassNames}>
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className={serverInfoClassNames}>
                            <Link className="nav-link" to="/server-info">Server Info</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
