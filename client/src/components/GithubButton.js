import React from 'react'

const GithubButton = () => {

  const handleLogin = () => {
    window.location.href='http://localhost:7000/auth/github'
  }

  return (
    <div>
      <h1>Welcome to My Github oAuth Project</h1>
      <button onClick={handleLogin}>Login with GitHub</button>
    </div>
  )
}

export default GithubButton