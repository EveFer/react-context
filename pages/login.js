import { useContext } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import {AuthenticateContext} from '../contexts/AuthenticateContext'

export default function Login() {
  const {responseForm, setResponseForm} = useContext(AuthenticateContext)
  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    setResponseForm({...responseForm, isrCobranza: 7500 })
    
    router.push('/dashboard/cliente')
  }

  return (
    <Layout>
       <div className="container">
         <div className="row">
           <div className="col-12">
           <form onSubmit = {handleSubmit}>
              <div className="row g-2">
                <div className="col-md">
                  <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInputGrid" placeholder="name@example.com" />
                    <label htmlFor="floatingInputGrid">Email address</label>
                  </div>
                </div>
                <div className="col-md">
                <div className="form-floating">
                    <input   type="password" className="form-control" id="floatingInputGrid" placeholder="name@example.com" />
                    <label htmlFor="floatingInputGrid">Password</label>
                  </div>
                </div>
              </div>
              <div>
              </div>
              <button type="submit" className="btn btn-primary">Iniciar sesión</button>
          </form>
           </div>
         </div>
       </div>
    </Layout>
  )
}
