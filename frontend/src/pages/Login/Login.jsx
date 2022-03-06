import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import LoginForm from '../../components/LoginForm/LoginForm'

const Login = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  useEffect(() => {
    token && navigate('/')
  }, [token])
  return (
    <div>
      <LoginForm />
      <h2>Don't have an account? <Link to="/register">Sign up here</Link></h2>
    </div>
  )
}

export default Login