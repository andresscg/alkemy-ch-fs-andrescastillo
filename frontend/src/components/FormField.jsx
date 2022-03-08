/* eslint-disable react/prop-types */
import React from 'react'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input
} from '@chakra-ui/react'

function FormField ({ type, value, name, register, errors }) {
  return (
    <FormControl isInvalid={errors[value]}>
      <FormLabel htmlFor={value} fontSize="3xl">
        {`${name}:`}
      </FormLabel>
      <Input
        id={value}
        name={value}
        type={type}
        {...register(value, {
          required: '*This field is required'
        })}
        size="lg"
        height="3rem"
        fontSize={'3xl'}
      />
      <FormErrorMessage fontSize="3xl">
        {errors[value] && errors[value].message}
      </FormErrorMessage>
    </FormControl>
  )
}

export default FormField
