import React, { useState } from 'react'
import { Form } from './LoginFormStyles'
import userActions from '../../redux/actions/userActions'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {
  Button,
  useToast
} from '@chakra-ui/react'
import FormField from '../FormField'

const LoginForm = () => {
  const [sending, setSending] = useState(false)
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const toast = useToast()

  function onSubmit (data) {
    setSending(true)

    dispatch(userActions.signIn(data)).then((res) => {
      setSending(false)
      if (res.success) {
        toast({
          title: 'Welcome back!',
          description: 'You logged in successfully',
          status: 'success',
          position: 'bottom-right',
          duration: 5000,
          isClosable: true
        })
        navigate('/')
      } else {
        toast({
          title: 'Ups!',
          description: res.response,
          status: 'error',
          position: 'bottom-right',
          duration: 5000,
          isClosable: true
        })
      }
    })
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormField value="email" name="Email" errors={errors} register={register} type="email"/>
      <FormField value="password" name="Password" errors={errors} register={register} type="password"/>
      <Button type="submit" colorScheme="orange" size="lg" fontSize="5xl" padding="10" isLoading={sending}>
        Log In
      </Button>
      <h2>You don`&apos;`t have an account? <Link to="/register">Sign up here</Link></h2>
    </Form>
  )
}

export default LoginForm
