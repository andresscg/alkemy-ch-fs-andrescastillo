const userReducer = (state = {token: null, name: null, country: null, profilePicture: null, _id: null}, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      localStorage.setItem('token', action.payload.token)
      return {
        ...state,
        token: action.payload.token,
        name: action.payload.name,
        country: action.payload.country,
        profilePicture: action.payload.profilePicture,
        _id: action.payload._id
      }
    case 'SIGN_OUT':
      localStorage.removeItem('token')
      return {
        token: null,
        name: null,
        country: null,
        profilePicture: null, 
        _id: null
      }
    default:
      return state
  }
}

export default userReducer