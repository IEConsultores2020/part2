import React from 'react'

const Person =  ({ person }) => {

    return (
    <li>{person.name} | {person.numbers}</li>
    )
}

export default Person