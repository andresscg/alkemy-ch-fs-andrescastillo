import axios from 'axios'

const userActions = {
  signUp: (user) => {
    return async (dispatch, getState) => {
      let response
      await axios.post('http://localhost:5000/api/users/signup', user)
        .then(res => {
          response = res
          dispatch({type: 'SIGN_IN', payload: response.data.response})
        })
        .catch(err => {
          response = err.response
        })
      return response
    }
  },
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
      await axios.get('http://localhost:5000/api/verifyToken', {
        headers: {
          Authorization: 'Bearer ' + token
        }
      }).then(res => {
        response = res.data
        dispatch({type: 'SIGN_IN', payload: {...response, token}})
      }).catch(err => response = err.response)
      return response
    }
  }
}

export default userActions