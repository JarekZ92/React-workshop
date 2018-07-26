import React from 'react'

import PaperRefined from '../../components/PaperRefined'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';


const Forms = (props) => (
    <PaperRefined>
        <TextField
            type={'text'}
            value={props.newTaskText}
            fullWidth={true}
            onChange={props.onNewTaskTextChanged}
        />
        <RaisedButton
            label="Dodaj"
            primary={true}
            fullWidth={true}
            onClick={props.onAddNewTaskClickHandler}
        />
    </PaperRefined>
)

export default Forms