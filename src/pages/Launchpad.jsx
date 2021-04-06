import React, { Component } from "react"
import flower from "../images/flower.png"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "./Launchpad.scss"
class Launchpad extends Component {
  render() {
    return (
      <>
      <div className="launchpad-content">
        <h1>Launchpad</h1>
        <div className="card-wrap">
          <div className="card">
            <div className="card-head">
              <AccountCircleIcon />
              <h5>FlowerpotSwap</h5>
              <span>0</span>
            </div>
            <div className="card-body">
              <p>More than a launchpad. We offer fair bot free IDOs to our community and will focus on helping developers start great projects with our help</p>
              <div className="progress-bar">0%</div>
              <small>0 / TBA BNB</small>
              <div className="table-wrap">
                <div className="content">
                  Total Supply
                  <span>50M</span>
                </div>
                <div className="content">
                Presale Supply
                  <span>15M</span>
                </div>
                <div className="content">
                Min Investement
                  <span>TBA</span>
                </div>
                <div className="content">
                Max Investement
                  <span>TBA</span>
                </div>
                <div className="content">
                Rate (Price per BNB)
                  <span>0.002</span>
                </div>
                <div className="content">
                Listing Price (per BNB)
                  <span>0.0024</span>
                </div>
              </div>
            </div>
            <div className="card-foot">
              <button>Show Project</button>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <AccountCircleIcon />
              <h5>FlowerpotSwap</h5>
              <span>0</span>
            </div>
            <div className="card-body">
              <p>More than a launchpad. We offer fair bot free IDOs to our community and will focus on helping developers start great projects with our help</p>
              <div className="progress-bar">0%</div>
              <small>0 / TBA BNB</small>
              <div className="table-wrap">
                <div className="content">
                  Total Supply
                  <span>50M</span>
                </div>
                <div className="content">
                Presale Supply
                  <span>15M</span>
                </div>
                <div className="content">
                Min Investement
                  <span>TBA</span>
                </div>
                <div className="content">
                Max Investement
                  <span>TBA</span>
                </div>
                <div className="content">
                Rate (Price per BNB)
                  <span>0.002</span>
                </div>
                <div className="content">
                Listing Price (per BNB)
                  <span>0.0024</span>
                </div>
              </div>
            </div>
            <div className="card-foot">
              <button>Show Project</button>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default Launchpad
