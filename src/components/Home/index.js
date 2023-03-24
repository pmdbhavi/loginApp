import {Component} from 'react'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {login: true}

  isLogin = () => {
    this.setState(prevState => ({login: !prevState.login}))
  }

  render() {
    const {login} = this.state
    return (
      <div className="main-container">
        <div className="contain">
          <Message message={login} />
          <button className="button" type="button" onClick={this.isLogin}>
            {login ? <Login /> : <Logout />}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
