import React, {useState} from 'react'

const TestForm = () => {
    const [form, setForm] = useState({
        input: '',
        input2: ''
    })

    const handlerOnChange = (event) => {
        const { value, name } = event.target
        setForm({...form, [name]:value})
    }

    const handlerOnSubmit = (event) => {
        event.preventDefault()

        console.log(form)
    }

    return (
        <form onSubmit={handlerOnSubmit}>
            <label htmlFor='test'>Something</label>
            <input 
                onChange={handlerOnChange}
                id="test"
                type="text"
                value={form.input}
                name="input"
                required={true}
                placeholder='Enter something'
            />

            <label htmlFor='field2'>Second field</label>
            <input 
                onChange={handlerOnChange}
                id="field2"
                type="text"
                value={form.input2}
                name="input2"
                placeholder='Enter something'
            />

            <input type="submit" value="Send" />
            <button type='submit'>Send 2</button>
        </form>
    )
}

export default TestForm
