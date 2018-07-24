import React from 'react'

const SingingButton = (props) => (
    <div>
        <button
            onClick={props.makeSound}
        >
            {props.label}

        </button>
    </div>
)

export default SingingButton