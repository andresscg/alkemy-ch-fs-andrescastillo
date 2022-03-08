import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../../components/LoginForm/LoginForm'
import { LoginContainer } from './LoginStyles'

const Login = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  useEffect(() => {
    token && navigate('/')
  }, [token])
  return (
    <LoginContainer>
      <img src="/assets/login.svg" alt="budget" style={{ maxWidth: '50%', flex: '1 1 0' }} />
      <LoginForm />
    </LoginContainer>
  )
}

export default Login
