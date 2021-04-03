import React, { Component } from 'react'
import stageOne from "../images/stage-1.png"
import flower from "../images/flower.png"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import "./Nftc.scss"
class Nftc extends Component {
  render() {
    return (
      <>
      <div className="collectible-img">
        <img src={stageOne} />
      </div>
      <div className="collectible-content">
        <h1>NFT Collectibles</h1>
        <div className="card-wrap">
          <div className="card">
            <div className="card-head">
              <div className="right">
                <h5>Bullish</h5>
              </div>
            </div>
            <div className="card-body">
            <img src={flower} />
            </div>
            <div className="collapse-wrap">
              <a data-bs-toggle="collapse" href="#details-1" role="button" aria-expanded="false" aria-controls="details-1">
                Details
                <KeyboardArrowDownIcon />
              </a>
              <div class="collapse" id="details-1">
                <div class="card card-body">
                  <div className="content">
                  Happy Niu Year! This bunny’s excited for the year of the bull (market!)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <div className="right">
                <h5>Hiccup</h5>
              </div>
            </div>
            <div className="card-body">
            <img src={flower} />
            </div>
            <div className="collapse-wrap">
              <a data-bs-toggle="collapse" href="#details-2" role="button" aria-expanded="false" aria-controls="details-2">
                Details
                <KeyboardArrowDownIcon />
              </a>
              <div class="collapse" id="details-2">
                <div class="card card-body">
                  <div className="content">
                  Oopsie daisy! Hiccup's had a bit of an accident. Poor little fella.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <div className="right">
                <h5>Sleepy</h5>
              </div>
            </div>
            <div className="card-body">
            <img src={flower} />
            </div>
            <div className="collapse-wrap">
              <a data-bs-toggle="collapse" href="#details-3" role="button" aria-expanded="false" aria-controls="details-3">
                Details
                <KeyboardArrowDownIcon />
              </a>
              <div class="collapse" id="details-3">
                <div class="card card-body">
                  <div className="content">
                  Aww, looks like flowerpotswap all day is tough work. Sweet dreams
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default Nftc
