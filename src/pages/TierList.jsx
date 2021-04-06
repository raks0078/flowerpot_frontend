import React, { Component } from 'react'
import "./TierList.scss"
class TierList extends Component {
  render() {
    return (
      <>
      <div className="tierlist-content">
        <h1>Tierlist</h1>
        <div className="card-wrap">
          <div className="card">
            <div className="card-head">
              <h5>Low Tier</h5>
            </div>
            <div className="card-body">
              <p>Holding stack <br/>$LAUNCH required</p>
              <span>xxxxx</span>
              <div className="table-wrap">
                <div className="content">
                Holding period
                  <span>7 Days</span>
                </div>
                <div className="content">
                Min/Max restriction
                  <span>Applied</span>
                </div>
              </div>
            </div>
            <div className="card-foot">
            Share of Tokens
              <span>50%</span>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <h5>Medium Tier</h5>
            </div>
            <div className="card-body">
              <p>Holding stack <br/>$LAUNCH required</p>
              <span>xxxxx</span>
              <div className="table-wrap">
                <div className="content">
                Holding period
                  <span>7 Days</span>
                </div>
                <div className="content">
                Min/Max restriction
                  <span>Applied</span>
                </div>
              </div>
            </div>
            <div className="card-foot">
            Share of Tokens
              <span>30%</span>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <h5>High Tier</h5>
            </div>
            <div className="card-body">
              <p>Holding stack <br/>$LAUNCH required</p>
              <span>xxxxx</span>
              <div className="table-wrap">
                <div className="content">
                Holding period
                  <span>7 Days</span>
                </div>
                <div className="content">
                Min/Max restriction
                  <span>Applied</span>
                </div>
              </div>
            </div>
            <div className="card-foot">
            Share of Tokens
              <span>20%</span>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <h5>God Tier</h5>
            </div>
            <div className="card-body">
              <p>Holding stack <br/>$LAUNCH required</p>
              <span>xxxxx</span>
              <div className="table-wrap">
                <div className="content">
                Holding period
                  <span>7 Days</span>
                </div>
                <div className="content">
                Min/Max restriction
                  <span>No Max Applied</span>
                </div>
              </div>
            </div>
            <div className="card-foot">
            Share of Tokens
              <span>10%</span>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default TierList
