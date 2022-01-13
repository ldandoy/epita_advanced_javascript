import React, {useState} from 'react'

const ListAnimals = () => {
    const [animals, setAnimals] = useState(['Lion', "Aigle", "Tiger"])
    const [newAnimal, setNewAnimal] = useState('')

    const handlerOnChange = (e) => {
        setNewAnimal(e.target.value)
    }

    const handledSubmit = (e) => {
        e.preventDefault()

        setAnimals([...animals, newAnimal])
        setNewAnimal('')
    }

    return (
        <div>
            <form onSubmit={handledSubmit}>
                <input
                    type="text"
                    name="newAnimal"
                    value={newAnimal}
                    onChange={handlerOnChange}
                    placeholder='Add the new of a new animal'
                />
                <button type='submit'>Add Animal</button>
            </form>
            <ul>
                {animals.map((animal,index) => <li key={'animals-' + index}>
                    {animal}
                </li>)}
            </ul>
        </div>
    )
}

export default ListAnimals
