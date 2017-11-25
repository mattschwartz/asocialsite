import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as DataModuleActions from '../../actions/dataModule'

const ErrorMessage = ({ hasError, errorMessage, clearError }) => {
    if (!hasError) {
        return false
    }

    return (
        <div className="alert alert-danger alert-dismissible">
            <button onClick={clearError} type="button" className="close">
                <span aria-hidden="true">&times;</span>
            </button>
            <h5>Hold on, something's not right</h5>
            <p>{errorMessage}</p>
        </div>
    )
}

export default connect(
    state => ({
        hasError: state.data.hasError,
        errorMessage: state.data.errorMessage
    }),
    dispatch => bindActionCreators(DataModuleActions, dispatch)
)(ErrorMessage)
