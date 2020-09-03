import {createContext} from 'react'

function emptyFunction() {}

export const AuthContext = createContext({
    token: null,
    userId: null,
    login: emptyFunction,
    logout: emptyFunction,
    isAuthenticated: false,
})