import React, { Component } from 'react'
import stageOne from "../images/stage-1.png"
import flower from "../images/flower.png"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "./Ifo.scss"
class Ifo extends Component {
  render() {
    return (
      <>
      <div className="ifo-img">
        <img src={stageOne} />
      </div>
      <div className="ifo-content">
        <h1>IFO: Initial Farm Offerings
          <small>Buy new tokens with a brand new token sale model.</small>
        </h1>
        <div className="tool-wrap">
          <div className="tool-left">
            <div className="btn-group">
              <a href="#" class="btn active" aria-current="page">Next IFO</a>
              <a href="#" class="btn">Past IFOs</a>
            </div>
          </div>
        </div>
        <div className="card-wrap">
          <div className="card">
            <div className="card-banner">
            <AccountCircleIcon />
            </div>
            <div className="card-head">
              <AccountCircleIcon />
              <div className="right">
                <h5>Belt (BELT)</h5>
                <div className="d-flex">
                AMM protocol incorporating multi-strategy yield optimization</div>
              </div>
            </div>
            <div className="card-foot">
              <button>Unlock Wallet</button>
            </div>
            <div className="collapse-wrap">
              <a data-bs-toggle="collapse" href="#details-1" role="button" aria-expanded="false" aria-controls="details-1">
                Details
                <KeyboardArrowDownIcon />
              </a>
              <div class="collapse" id="details-1">
                <div class="card card-body">
                  <p>Belt.fi is a protocol that allows users to retain the stability of their asset positions and get maximum yields with minimal risk, including automated vault compounding and yield optimization strategies. BELT is the governance and incentivization token of Belt Finance. BELT will be distributed to all types of pools.</p>
                  <div className="content">
                  Launch Time
                  <span>Mar. 10,
                    <a href="javascript:void(0)">5PM SGT</a>
                  </span>
                  </div>
                  <div className="content">
                  For Sale
                  <span>150,000 BELT</span>
                  </div>
                  <div className="content">
                  To raise (USD)
                  <span>$3,000,000</span>
                  </div>
                  <div className="content">
                  CAKE to burn (USD)
                  <span>$1,500,000</span>
                  </div>
                  <div className="content">
                  Total raised (% of target)
                  <span>27084.42%</span>
                  </div>
                  <a href="javascript:void(0)">
                  View project site
                  <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ gqbVmy"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex bottom-wrap">
          <div className="content-wrap">
            <h1 className="mb-1p2">How to take part
              <small>Before Sale:</small>
            </h1>
            <ul>
              <li>Buy CAKE and BNB tokens</li>
              <li>Get CAKE-BNB LP tokens by adding CAKE and BNB liquidity</li>
            </ul>
            <div className="d-flex links-wrap">
              <a href="javascript:void(0)">Buy CAKE
              <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ gqbVmy"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg>
              </a>
              <a href="javascript:void(0)">Get LP tokens
              <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ gqbVmy"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg>
              </a>
            </div>
            <h1 className="mt-1p5 mb-1p2">
              <small>During Sale:</small>
            </h1>
            <ul>
              <li>While the sale is live, commit your CAKE-LP tokens to buy the IFO tokens</li>
            </ul>
            <h1 className="mt-1p5 mb-1p2">
              <small>After Sale:</small>
            </h1>
            <ul>
              <li>Claim the tokens you bought, along with any unspent funds.</li>
              <li>Done!</li>
            </ul>
            <button>Read More</button>
          </div>
          <div className="img-wrap">
            <AccountCircleIcon />
          </div>
        </div>
        <div className="d-flex bottom-wrap last-bottom-wrap">
        <div className="img-wrap">
            <AccountCircleIcon />
          </div>
          <div className="content-wrap">
            <h1 className="mb-1p2">Want to launch your own IFO?</h1>
            <p>Launch your project with PancakeSwap, Binance Smart Chain’s most-used AMM project and liquidity provider, to bring your token directly to the most active and rapidly growing community on BSC.</p>
            <button>Apply to Launch</button>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default Ifo
