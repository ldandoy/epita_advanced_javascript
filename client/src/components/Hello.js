import React from 'react'

const Hello = ({ name }) => {
    const finalName = name || "World"

    const array = [ 'item1', 'item2' ]

    return (<>
        <h1>Hello { finalName } !</h1>
        <div>
            <ul>
                {array.map((item, index) => <li key={`hello-${index}`}>
                    {item}
                </li>)}
            </ul>
        </div>
    </>)
}

export default Hello
