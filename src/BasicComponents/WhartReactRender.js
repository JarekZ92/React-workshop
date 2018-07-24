import React from 'react'

const string = 'Ala ma kota!'
const number = 123
const bool = true
const undefinedVar = undefined
const nulVar = null
const emtyArray = []
const arrWithStrings = ['Ala', 'Ela', 'Ilona']

const arrWithReactElements = [
    <strong key={0}>Ala</strong>,
    <h2 key={2}>Ela</h2>
]

const WhartReactRenders = () => (
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
        <br />

        <ul>
            {
                arrWithStrings.map((string, index) => <li key= {index} >{string}</li>)
            }
        </ul>
    </div>
)

export default WhartReactRenders
