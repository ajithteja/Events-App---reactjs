import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {status} = props
  console.log(status)

  const initialDetails = () => (
    <p className="initial-status">
      Click on an event, to view its registration details
    </p>
  )

  const yetToRegister = () => (
    <div className="yet-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-register-img"
      />
      <p className="initial-status register">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can ofter make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-button">
        Register Here
      </button>
    </div>
  )

  const registeredFunc = () => (
    <div className="yet-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="alright-tick"
      />
      <h1 className="initial-status registered">
        You have already registered for the event
      </h1>
    </div>
  )

  const registrationsClosed = () => (
    <div className="yet-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-img"
      />
      <h1 className="initial-status registrations-closed">
        Registrations Are Closed Now!
      </h1>
      <p className="initial-status registration-para">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const switchFunc = () => {
    switch (status) {
      case 'INITIAL':
        return initialDetails()
      case 'YET_TO_REGISTER':
        return yetToRegister()
      case 'REGISTERED':
        return registeredFunc()
      case 'REGISTRATIONS_CLOSED':
        return registrationsClosed()
      default:
        return null
    }
  }

  return <div className="status-container">{switchFunc()}</div>
}

export default ActiveEventRegistrationDetails
