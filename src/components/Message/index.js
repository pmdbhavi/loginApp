import './index.css'

const Message = props => {
  const {message} = props

  return (
    <h1 className="heading">{message ? 'Please Login' : 'Welcome User'}</h1>
  )
}

export default Message
