import React from 'react'

import Paper from 'material-ui/Paper'
import SingingButton from './SingingButton'




const SingingButtonWithBorder = (props) => (
    <Paper>
        <SingingButton
            label={props.label}
            sound={props.sound}
            makeSound={props.makeSound}
        />
    </Paper>
)

export default SingingButtonWithBorder