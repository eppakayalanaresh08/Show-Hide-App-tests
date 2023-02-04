/* eslint-disable no-unused-vars */
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onFirstName = () => {
    this.setState(preState => ({firstName: !preState.firstName}))
  }

  onLastName = () => {
    this.setState(preState => ({lastName: !preState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="card-button-container">
          <div className="card-each">
            <button className="button" type="button" onClick={this.onFirstName}>
              Show/Hide Firstname
            </button>
            {firstName && <p className="card-name">joe</p>}
          </div>
          <div className="card-each">
            <button className="button" type="button" onClick={this.onLastName}>
              Show/Hide Lastname
            </button>
            {lastName && <p className="card-name">jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
