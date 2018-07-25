import React from 'react'

import PaperRefined from '../components/PaperRefined'

const Forms = (props) => (
    <PaperRefined>
        <input
            type={'text'}
            value={props.newTaskText}
            onChange={props.onNewTaskTextChanged}
        />
        <button>Dodaj</button>
    </PaperRefined>
)

export default Forms