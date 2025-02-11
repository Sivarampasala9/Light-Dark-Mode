import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  lightDarkMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state

    const buttonText = isDarkMode ? 'Dark Mode' : 'Light Mode'
    const className = isDarkMode ? 'dark-mode' : 'light-mode'

    return (
      <div className="bg-container">
        <div className={`container ${className}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.lightDarkMode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
