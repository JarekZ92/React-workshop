import React from 'react'
import HelloWorld from './HelloWorld'
import DisplayName from './DisplayName'
import DisplayArray from './DisplayArray'
import WhatReactRender from './WhatReactRender'
import SingingButtonWithBorder from './SingingButtonWithBorder'

const BasicComponents = (props) => (
    <div>
        <h1>Basic Components</h1>
        <hr />
        <HelloWorld />
        <hr />
        <DisplayName
            firstName={'Jarek'}
            lastName={'Zbiciak'}
        />
        <hr />
        <DisplayArray
            listOfNames={['Ola', 'Ala', 'Ela']}
        />
        <hr />
        <SingingButtonWithBorder
            label={'Make souond'}
            sound={'Wlazł kotek na płotek...'}
        />
    </div>
)

export default BasicComponents