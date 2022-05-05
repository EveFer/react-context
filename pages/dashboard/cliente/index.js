import { useContext } from 'react'
import LayoutClient from '../../../components/LayoutClient'
import {AuthenticateContext} from '../../../contexts/AuthenticateContext'

export default function Client() {
  const {userAuth} = useContext(AuthenticateContext)

  return (
    <LayoutClient>
        <h1>Dashboard</h1>
       <p>{userAuth.name}</p>
       <p>{userAuth.lastName}</p>
    </LayoutClient>
  )
}
