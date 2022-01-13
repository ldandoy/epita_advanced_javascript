import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Facts = () => {
    const [fact, setFact] = useState(null)

    const getRandomFact = async () => {
        const res = await axios.get('https://api.chucknorris.io/jokes/random')
        console.log(res.data.value)
        setFact(res.data.value)
    }

    useEffect(() => {
        getRandomFact()

        /*axios.get('https://api.chucknorris.io/jokes/random')
        .then(res => {
            console.log(res.data.value)
            setFact(res.data.value)
        })
        .catch(error => {
            console.error(error)
        })*/

        console.log("test")
    }, [])

    useEffect(() => {
        if (fact)
            console.log("test 1")
    },[fact])

    return (
        <div id="fact-container">
            {!fact && <>Loading...</>}
            {fact && <div className="fact">{fact}</div>}
        </div>
    )
}

export default Facts
