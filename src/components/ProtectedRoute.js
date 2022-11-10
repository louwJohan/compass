import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const ProtectedRoute = ({isAuthenticated, children}) => {
  const history = useHistory()
  return (
    if (isAuthenticated === false) {
      return history.push("/signin")
    }
    return children
  )
}

export default ProtectedRoute
