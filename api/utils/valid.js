errors = {
    email: [
        '',''
    ]
}

const validEmail = (errors, email) => {
    if (email === '') {
        errors.email.push("Email is empty")
    }

    // checke if it's an email
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if (!re.test(String(email).toLowerCase())) {
        errors.email.push("Email is not valid")
    }

    return errors
}

const validPassword = (errors, password) => {
    if (password === '') {
        errors.password.push("Email is empty")
    }

    if (password.length < 6) {
        errors.password.push("Password should be at least 6 caracters")
    }

    return errors
}

module.exports = { validEmail: validEmail, validPassword: validPassword }