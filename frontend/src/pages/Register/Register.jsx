import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import { LoginContainer } from '../Login/LoginStyles'

const Register = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  useEffect(() => {
    token && navigate('/')
  }, [token])
  return (
    <LoginContainer>
      <img src="/assets/register.svg" alt="budget" style={{ maxWidth: '50%', flex: '1 1 0' }} />
      <RegisterForm />
    </LoginContainer>
  )
}

export default Register
