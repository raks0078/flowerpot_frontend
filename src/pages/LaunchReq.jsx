import React, { Component } from 'react'
import "./LaunchReq.scss"
class LaunchReq extends Component {
  render() {
    return (
      <>
     <div className="launchreq-content">
        <h1>Token/Presale</h1>
        <p>Do you have an ongoing project or an idea for a new one? Message us, we
would love to hear from you!</p>
        <form>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Project Name" />
            <input type="text" className="form-control" placeholder="E-mail" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Website" />
            <input type="text" className="form-control" placeholder="Telegram" />
          </div>
          <div className="form-group">
            <textarea type="text" className="form-control" placeholder="Describe your projects functions, which problems it going to solve" rows="5"></textarea>
          </div>
          <div className="form-group">
            <button>Send Request</button>
          </div>
        </form>
      </div>
      </>
    )
  }
}

export default LaunchReq
