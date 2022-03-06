import axios from 'axios'

const userActions = {
  signIn: (user) => {
    return async(dispatch, getState) => {
      let response 
      await axios.post('http://localhost:5000/api/users/signin', user)
        .then(res => {
          response = res.data
          dispatch({type: 'SIGN_IN', payload: response.response})
        })
        .catch(err => response = err.response.data)
      return response
    }
  },
  signInLS: (token) => {
    return async(dispatch, getState) => {
      let response
      console.log('entra')
      await axios.get('http://localhost:5000/api/verifyToken', {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).then(res => {
        console.log(res)
        response = res.data
        dispatch({type: 'SIGN_IN', payload: {...response, token}})
      }).catch(err => response = err.response)
      return response
    }
  }
}

export default userActions