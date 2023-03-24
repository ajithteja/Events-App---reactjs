import './index.css'

const EventItem = props => {
  const {eachEvent, registrationStatusFunc} = props
  const {imageUrl, name, location, registrationStatus} = eachEvent

  const onEventBtn = () => {
    registrationStatusFunc(registrationStatus)
  }

  return (
    <li className="event-li-container">
      <button onClick={onEventBtn} type="button" className="img-button">
        <img src={imageUrl} alt="event" className="event-img" />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
