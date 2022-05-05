
import {useState} from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../components/Layout'
import { Container, Row, Col } from 'react-bootstrap'
import ClipLoader from "react-spinners/ClipLoader";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { createAccount } from '../services/users'

const schemaRegister = yup.object({
  email: yup.string().email('El email no es valido').required('El campo es requerido'),
  password: yup.string().min(8, 'La longitud min es de 8 caracteres').required('El campo es requerido'),
  passwordConfirmation: yup
    .string()
    .required('El campo es requerido')
    .oneOf([yup.ref('password')], 'La contraseña no coincide')
})

export default function Home() {
  const router = useRouter()
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schemaRegister)
  })

  const onSubmitRegister = async (data) => {
    // valido y obtengo la data
    setLoading(true)
    console.log('Enviando data...')
    console.log(data)
    delete data.passwordConfirmation // eliminar propeidad de un objeto
    const response =  await createAccount({...data, rfc: 'delwkenede', name: 'Fernanda Palacios', surName: 'EveFer'})
    console.log(response)
    const dataJson = await response.json()
    console.log(dataJson)

    if(response.status === 200) {
      setLoading(false)
      router.push('/login')
      return
    }

    // si ocurre un error
    setLoading(false)
    setMessage('No pudimos registrar tu cuenta, vuelve a intentarlo')
  }

  // console.log(errors)

  return (
    <Layout>
      <Container>
        <Row>
          <Col md={6}>
            <section className="hero">
              <button className="btn-contapp">Registarme</button>
            </section>
          </Col>
          <Col md={6}>
            <form onSubmit = {handleSubmit(onSubmitRegister)}>
              <div className="row g-2">
                <div className="col-md">
                  <div className="form-floating">
                    <input {...register('email')} type="email" className="form-control" id="floatingInputGrid" placeholder="name@example.com" />
                    <label htmlFor="floatingInputGrid">Email address</label>

                    <p className="text-danger">{errors?.email?.message}</p>
                  </div>
                </div>
                <div className="col-md">
                <div className="form-floating">
                    <input  {...register('password')} type="password" className="form-control" id="floatingInputGrid" placeholder="name@example.com" />
                    <label htmlFor="floatingInputGrid">Password</label>
                    <p className="text-danger">{errors?.password?.message}</p>
                  </div>
                </div>
                <div className="col-md">
                <div className="form-floating">
                    <input {...register('passwordConfirmation')} type="password" className="form-control" id="floatingInputGrid" placeholder="name@example.com" />
                    <label htmlFor="floatingInputGrid">Confirmar password</label>
                    <p className="text-danger">{errors?.passwordConfirmation?.message}</p>
                  </div>
                </div>
              </div>
              <div>
                <ClipLoader color='red' loading={loading} size={20} />
              </div>
              {
                message && <p className="text-danger">{message}</p>
              }
              <button type="submit" className="btn btn-primary">Registrar</button>
          </form>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
