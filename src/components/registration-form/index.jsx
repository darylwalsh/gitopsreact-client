import React from 'react'
import bcrypt from 'bcryptjs'
import validator from '../../utils/validator'
import register from '../../utils/register'
import Button from '../button/index.jsx'
import Input from '../input/index.jsx'

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: {
        value: '',
        valid: null,
      },
      password: {
        value: '',
        valid: null,
      },
      userId: null,
    }
  }
  handleRegistration = event => {
    event.preventDefault()
    event.stopPropagation()
    const hasValidParams = this.state.email.valid && this.state.password.valid
    if (!hasValidParams) {
      console.error('Invalid Parameters')
      return
    }
    const email = this.state.email.value
    const password = this.state.password.value
    const digest = bcrypt.hashSync(password, 10)
    register(email, digest)
      .then(console.log)
      .catch(console.error)
  }

  handleInputChange = (name, event) => {
    const value = event.target.value
    const valid = validator[name](value)
    this.setState({
      [name]: { value, valid },
    })
  }
  render() {
    if (this.state.userId) {
      return (
        <div id="registration-success">
          You have registered successfully
          <p>Where do you want to go next?</p>
          <Link to="/">
            <Button title="Home" />
          </Link>
          <Link to="/login">
            <Button title="Login" />
          </Link>
        </div>
      )
    }
    return (
      <form onSubmit={this.handleRegistration}>
        <Input
          label="Email"
          type="email"
          name="email"
          id="email"
          value={this.state.email.value}
          valid={this.state.email.valid}
          onChange={this.handleInputChange}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          id="password"
          value={this.state.password.value}
          valid={this.state.password.valid}
          onChange={this.handleInputChange}
        />
        <Button
          title="Register"
          id="register-button"
          disabled={!(this.state.email.valid && this.state.password.valid)}
        />
      </form>
    )
  }
}

export default RegistrationForm
