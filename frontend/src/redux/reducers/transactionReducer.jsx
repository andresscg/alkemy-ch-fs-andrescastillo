const transactionReducer = (state = { transactionsByUser: [] }, action) => {
  switch (action.type) {
    case 'GET_TRANSACTIONS_USER':
      return {
        ...state,
        transactionsByUser: action.payload
      }
    default:
      return state
  }
}

export default transactionReducer
