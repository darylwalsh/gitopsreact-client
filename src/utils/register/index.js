function register(email, digest) {
  // Send the credentials to the server
  const payload = { email, digest }
  // http://%%API_SERVER_HOST%%:%%API_SERVER_PORT%%/users/
  // http://localhost:8080/users
  const request = new Request(
    'http://%%API_SERVER_HOST%%:%%API_SERVER_PORT%%/users/',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify(payload),
    }
  )
  return fetch(request)
    .then(response => {
      if (response.status === 200) {
        return response.text()
      } else {
        throw new Error('Error creating new user')
      }
    })
    .then(userId => this.setState({ userId }))
    .catch(console.error)
}

export default register
