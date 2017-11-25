import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ErrorMessage, Loading } from '../shared'
import * as HomeModule from '../../actions/homeModule'

class ServerInfoComponent extends Component {

    componentWillMount() {
        this.props.getServerTime()
    }

    render() {
        return (
            <div>
                <ErrorMessage />
                {this.props.isLoading && <Loading />}
                Hello, world! The current time on the server is {this.props.serverTime}.
                <div>
                    <button className="btn btn-info" onClick={() => this.props.getServerTime()}>Refresh</button>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        serverTime: state.home.serverTime,
        isLoading: state.data.isLoading
    }),
    dispatch => ({
        getServerTime: () => dispatch(HomeModule.getServerTime())
    })
)(ServerInfoComponent)
