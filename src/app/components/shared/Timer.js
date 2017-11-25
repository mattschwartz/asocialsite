import React from 'react'
import TimeAgo from 'react-timeago'

class Timer extends React.Component {

    render() {
        const { endDateTime } = this.props

        if (!endDateTime) {
            return <span>0s</span>
        }

        return <TimeAgo date={endDateTime} formatter={this.formatDate} />
    }

    formatDate(value, unit, suffix, date, defaultFormatter) {
        if (suffix === 'ago') {
            return 'Updating...'
        }

        let result = `Updating in ${value} ${unit}`
        if (value !== 1) {
            result = `${result}s`
        }

        return result
    }
}

export default Timer
