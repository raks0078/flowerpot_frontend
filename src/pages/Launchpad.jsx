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
              <p>More than a launchpad. We offer fair IDOs to our community and will focus on helping developers start great projects. Guaranteed allocation for all Tiers…</p>
              <div className="progress-bar">0%</div>
              <small>0 / TBA BNB</small>
              <div className="table-wrap">
                <div className="content">
                  Total Supply
                  <span>630000 $flower</span>
                </div>
                <div className="content">
                Min Investement
                  <span>0.5 BNB</span>
                </div>
                <div className="content">
                Max Investement
                  <span>5 BNB</span>
                </div>
                <div className="content">
                Hard cap
                  <span>150 BNB</span>
                </div>
                <div className="content">
                Soft cap
                  <span>70 BNB</span>
                </div>
                <div className="content">
                Rate (Price per BNB)
                  <span>0.001 BNB</span>
                </div>
                <div className="content">
                Listing Price (per BNB)
                  <span>0.99$</span>
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
              <p>More than a launchpad. We offer fair IDOs to our community and will focus on helping developers start great projects. Guaranteed allocation for all Tiers…</p>
              <div className="progress-bar">0%</div>
              <small>0 / TBA BNB</small>
              <div className="table-wrap">
                <div className="content">
                  Total Supply
                  <span>840000 flower token</span>
                </div>
                <div className="content">
                Min Investement
                  <span>0.5BNB</span>
                </div>
                <div className="content">
                Max Investement
                  <span>5 BNB</span>
                </div>
                <div className="content">
                Hard cap
                  <span>150 BNB</span>
                </div>
                <div className="content">
                Soft cap
                  <span>70 BNB</span>
                </div>
                <div className="content">
                Rate (Price per BNB)
                  <span>1.66$</span>
                </div>
                <div className="content">
                Listing Price (per BNB)
                  <span></span>
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
              <p>More than a launchpad. We offer fair IDOs to our community and will focus on helping developers start great projects. Guaranteed allocation for all Tiers…</p>
              <div className="progress-bar">0%</div>
              <small>0 / TBA BNB</small>
              <div className="table-wrap">
                <div className="content">
                  Total Supply
                  <span>540000 $Launch</span>
                </div>
                <div className="content">
                Min Investement
                  <span>1 BNB</span>
                </div>
                <div className="content">
                Max Investement
                  <span>5 BNB</span>
                </div>
                <div className="content">
                Hard cap
                  <span>150 BNB</span>
                </div>
                <div className="content">
                Soft cap
                  <span>70 BNB</span>
                </div>
                <div className="content">
                Rate (Price per BNB)
                  <span>2.22$</span>
                </div>
                <div className="content">
                Listing Price (per BNB)
                  <span></span>
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
