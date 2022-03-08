import { useState, useEffect } from 'react'
import { Form } from "../LoginForm/LoginFormStyles";
import userActions from "../../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Button,
  useToast,
  Select,
  FormControl,
  FormLabel
} from "@chakra-ui/react";
import FormField from '../FormField'
import axios from 'axios';

const RegisterForm = () => {
  const [sending, setSending] = useState(false)
  const [countries, setCountries] = useState(null)
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast()

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then(res => {
      setCountries(res.data.map(country => country.name.common).sort((a,b) => a.localeCompare(b)))
    })
  }, [])

  function onSubmit(data) {
    setSending(true)
    dispatch(userActions.signUp(data)).then(res => {
      setSending(false)
      if(res.data.success){
        toast({
          title: `Welcome ${res.data.response.name}!`,
          description: 'You created your account successfully',
          status: 'success',
          position: 'bottom-right',
          duration: 5000,
          isClosable: true
        })
        navigate("/");
      }else if(res.status === 409){
        toast({
          title: 'Ups!',
          description: res.data.response,
          status: 'error',
          position: 'bottom-right',
          duration: 5000,
          isClosable: true
        })
      }else{
        res.data?.errors?.map(err => {
          toast({
            title: 'Ups!',
            description: err.message,
            status: 'error',
            position: 'bottom-right',
            duration: 5000,
            isClosable: true
          })
        })
      }
    })
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormField name={"Name"} value={"name"} register={register} errors={errors} type={"text"} />
      <FormField name={"Email"} value={"email"} register={register} errors={errors} type={"email"} />
      <FormField name={"Password"} value={"password"} register={register} errors={errors} type={"password"} />
      <FormControl isInvalid={errors.country}>
        <FormLabel htmlFor="country" fontSize="3xl">Country: </FormLabel>
          <Select size="lg" id="country" {...register('country', {required: '*This field is required'})} fontSize="3xl">
            <option disabled>Choose your country</option>
            {countries?.map(country => <option key={country} value={country}>{country}</option>)}
          </Select>
      </FormControl>
      <Button type="submit" colorScheme="orange" size="lg" fontSize="3xl" padding="7" isLoading={sending}>
        Register
      </Button>
      <h2>Don't have an account? <Link to="/register">Sign up here</Link></h2>
    </Form>
  );
};

export default RegisterForm;