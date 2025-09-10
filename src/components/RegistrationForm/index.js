// src/components/RegistrationForm/index.js
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: false,
    lastNameError: false,
    submitted: false,
  }

  onFirstNameChange = event => {
    const {value} = event.target
    this.setState({firstName: value})
  }

  onLastNameChange = event => {
    const {value} = event.target
    this.setState({lastName: value})
  }

  validateFirstName = () => {
    const {firstName} = this.state
    return firstName.trim() !== ''
  }

  validateLastName = () => {
    const {lastName} = this.state
    return lastName.trim() !== ''
  }

  onFirstNameBlur = () => {
    const isValid = this.validateFirstName()
    this.setState({firstNameError: !isValid})
  }

  onLastNameBlur = () => {
    const isValid = this.validateLastName()
    this.setState({lastNameError: !isValid})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    const validFirst = firstName.trim() !== ''
    const validLast = lastName.trim() !== ''

    if (validFirst && validLast) {
      this.setState({submitted: true})
    } else {
      this.setState({
        firstNameError: !validFirst,
        lastNameError: !validLast,
      })
    }
  }

  onSubmitAnother = () => {
    this.setState({
      firstName: '',
      lastName: '',
      firstNameError: false,
      lastNameError: false,
      submitted: false,
    })
  }

  renderFirstNameField = () => {
    const {firstName, firstNameError} = this.state
    const inputClass = firstNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label htmlFor="firstName" className="input-label">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="First name"
          className={inputClass}
          value={firstName}
          onChange={this.onFirstNameChange}
          onBlur={this.onFirstNameBlur}
        />
        {firstNameError && <p className="error-message">Required</p>}
      </div>
    )
  }

  renderLastNameField = () => {
    const {lastName, lastNameError} = this.state
    const inputClass = lastNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label htmlFor="lastName" className="input-label">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          placeholder="Last name"
          className={inputClass}
          value={lastName}
          onChange={this.onLastNameChange}
          onBlur={this.onLastNameBlur}
        />
        {lastNameError && <p className="error-message">Required</p>}
      </div>
    )
  }

  renderForm = () => (
    <form className="form-container" onSubmit={this.onSubmitForm}>
      {this.renderFirstNameField()}
      {this.renderLastNameField()}
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  )

  renderSuccessView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-image"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-button"
        onClick={this.onSubmitAnother}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {submitted} = this.state
    return (
      <div className="registration-form-container">
        <h1 className="form-title">Registration</h1>
        <div className="view-container">
          {submitted ? this.renderSuccessView() : this.renderForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
