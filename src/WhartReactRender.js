import React from 'react'

const string = 'Ala ma kota!'
const number = 123
const bool = true
const undefinedVar = undefined
const nulVar = null
const emtyArray = []
const arrWithStrings = ['Ala', 'Ela', 'Ilona']

const WhartReactRender = () => (
    <div>
        {string}
        <br />
        {number}
        <br />
        {bool}
        <br />
        {undefined}
        <br />
        {null}
        <br />
        {emtyArray}
        <br />
        {arrWithStrings}
        <br />
        {arrWithStrings[0]}{arrWithStrings[1]}{arrWithStrings[2]}

        <ul>
            {
                arrWithStrings.map(string => <li>{string}</li>)
            }
        </ul>
    </div>
)

export default WhartReactRender
