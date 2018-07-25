import React from 'react'

import List from './List'

class ToDo extends React.Component {
    state = {
        tasks: [
            { isCompleted: false, text: 'Wynieś śmieci' },
            { isCompleted: false, text: 'Zmyj gary' }
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