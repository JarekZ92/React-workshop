import React from 'react'

import List from './List'

class ToDo extends React.Component {
    state = {
        tasks: [
            { isCompleted: false, text: 'Wynieś śmieci', key: '123' },
            { isCompleted: false, text: 'Zmyj gary', key: '654' }
        ]
    }

    render() {
        return (
            <div>
                <List
                    tasksList={this.state.tasks}
                />
            </div>
        )
    }
}

export default ToDo