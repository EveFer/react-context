import {createContext, useState} from 'react'

const AuthenticateContext = createContext()

// provider - Component que wrapeara a los componentes que tendra

 const AuthenticateProvider = ({children}) => {
    // const [userAuth, setUserAuth] = useState({})
    const [responseForm, setResponseForm] = useState({})
    const data = {responseForm, serResponseForm}
    return (
        <AuthenticateContext.Provider value={data}>
            {children}
        </AuthenticateContext.Provider>
    )
}

export { AuthenticateContext }

export default AuthenticateProvider