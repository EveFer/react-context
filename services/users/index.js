import { URL_BASE } from '../config'

// endpoint
function createAccount(dataUserToRegister) {
    const URL = `${URL_BASE}/users/signup`
    const options = {
        method: 'POST',
        body: JSON.stringify(dataUserToRegister),
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors'
    }

    return fetch(URL, options) // regresa una promesa
}

function login (email, password) {
    const URL = `${URL_BASE}/login`
    const options = {
        method: 'POST',
        body: JSON.stringify({email, password}),
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors'
    }

    return fetch(URL, options) // regresa una promesa
}

export {
    createAccount,
    login
}