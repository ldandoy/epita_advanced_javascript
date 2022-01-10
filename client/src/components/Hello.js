import React from 'react'

const Hello = ({ name }) => {
    const finalName = name || "World"

    return (
        <h1>Hello { finalName } !</h1>
    )
}

export default Hello
