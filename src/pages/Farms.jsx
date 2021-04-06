import React, { Component } from 'react'
import flower from "../images/flower.png"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import "./Farms.scss"
class Farms extends Component {
  render() {
    return (
      <>
      <div className="farms-content">
        <h1>Farms
          <small>Stake Liquidity Pool (LP) tokens to earn</small>
        </h1>
        <div className="tool-wrap">
          <div className="tool-left">
            <button className="active">
              <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ fxYfwL"><path d="M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z"></path></svg>
            </button>
            <button>
            <svg viewBox="0 0 24 24" color="textDisabled" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ exSDhd"><path d="M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z"></path></svg>
            </button>
            <div className="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="Staked" />
              <label class="form-check-label" for="Staked">Staked only</label>
            </div>
            <div className="btn-group">
              <a href="#" class="btn active" aria-current="page">Live</a>
              <a href="#" class="btn">Finished</a>
            </div>
          </div>
          <div className="tool-right">
            <div className="form-group">
              <label>Sort By</label>
              <select class="form-select form-control">
                <option selected>Hot</option>
                <option value="1">APR</option>
                <option value="2">Multiplier</option>
                <option value="3">Earned</option>
                <option value="3">Liquidity</option>
              </select>
            </div>
            <div className="form-group">
              <label>Search</label>
              <input type="text" className="form-control" placeholder="Search Farms" />
            </div>
          </div>
        </div>
        <div className="card-wrap">
          <div className="card">
            <div className="card-head">
              <AccountCircleIcon />
              <div className="right">
                <h5>CAKE-BNB</h5>
                <div className="d-flex">
                  <span className="core">
                    <svg viewBox="0 0 24 24" color="secondary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ euusbS"><path d="M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z"></path></svg>
                    Core
                  </span>
                  <span>40X</span>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-wrap">
                <div className="content">
                APR
                  <span>
                    <svg viewBox="0 0 24 24" width="18px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ hYmWca"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"></path><path d="M11.25 7.72H6.25V9.22H11.25V7.72Z"></path><path d="M18 15.75H13V17.25H18V15.75Z"></path><path d="M18 13.25H13V14.75H18V13.25Z"></path><path d="M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z"></path><path d="M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z"></path></svg>
                    84.34%
                  </span>
                </div>
                <div className="content">
                Earn
                  <span>CAKE</span>
                </div>
                <small>CAKE EARNED</small>
                <div className="content-bottom">
                0
                  <span>
                    <button>Harvest</button>
                  </span>
                </div>
                <small>CAKE-BNB LP STAKED</small>
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
                  <div className="content">
                  Total Liquidity:
                  <span>$688,684,372</span>
                  </div>
                  <a href="javascript:void(0)">
                  Get CAKE-BNB LP
                  <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ gqbVmy"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg>
                  </a>
                  <a href="javascript:void(0)">
                  View Contract
                  <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ gqbVmy"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg>
                  </a>
                  <a href="javascript:void(0)">
                  See Pair Info
                  <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ gqbVmy"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <AccountCircleIcon />
              <div className="right">
                <h5>NRV-BNB</h5>
                <div className="d-flex">
                  <span className="core">
                    <svg viewBox="0 0 24 24" color="secondary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ euusbS"><path d="M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z"></path></svg>
                    Core
                  </span>
                  <span>2X</span>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-wrap">
                <div className="content">
                APR
                  <span>
                    <svg viewBox="0 0 24 24" width="18px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ hYmWca"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"></path><path d="M11.25 7.72H6.25V9.22H11.25V7.72Z"></path><path d="M18 15.75H13V17.25H18V15.75Z"></path><path d="M18 13.25H13V14.75H18V13.25Z"></path><path d="M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z"></path><path d="M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z"></path></svg>
                    353.87%
                  </span>
                </div>
                <div className="content">
                Earn
                  <span>CAKE</span>
                </div>
                <small>CAKE EARNED</small>
                <div className="content-bottom">
                0
                  <span>
                    <button>Harvest</button>
                  </span>
                </div>
                <small>NRV-BNB LP STAKED</small>
              </div>
            </div>
            <div className="card-foot">
              <button>Unlock Wallet</button>
            </div>
            <div className="collapse-wrap">
              <a data-bs-toggle="collapse" href="#details-2" role="button" aria-expanded="false" aria-controls="details-2">
                Details
                <KeyboardArrowDownIcon />
              </a>
              <div class="collapse" id="details-2">
                <div class="card card-body">
                  <div className="content">
                  Total Liquidity:
                  <span>$8,183,178</span>
                  </div>
                  <a href="javascript:void(0)">
                  Get NRV-BNB LP
                  <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ gqbVmy"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg>
                  </a>
                  <a href="javascript:void(0)">
                  View Contract
                  <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ gqbVmy"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg>
                  </a>
                  <a href="javascript:void(0)">
                  See Pair Info
                  <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ gqbVmy"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-head">
              <AccountCircleIcon />
              <div className="right">
                <h5>DEGO-BNB</h5>
                <div className="d-flex">
                  <span className="core">
                    <svg viewBox="0 0 24 24" color="secondary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ euusbS"><path d="M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z"></path></svg>
                    Core
                  </span>
                  <span>1X</span>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-wrap">
                <div className="content">
                APR
                  <span>
                    <svg viewBox="0 0 24 24" width="18px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ hYmWca"><path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"></path><path d="M11.25 7.72H6.25V9.22H11.25V7.72Z"></path><path d="M18 15.75H13V17.25H18V15.75Z"></path><path d="M18 13.25H13V14.75H18V13.25Z"></path><path d="M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z"></path><path d="M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z"></path></svg>
                    220.66%
                  </span>
                </div>
                <div className="content">
                Earn
                  <span>CAKE</span>
                </div>
                <small>CAKE EARNED</small>
                <div className="content-bottom">
                0
                  <span>
                    <button>Harvest</button>
                  </span>
                </div>
                <small>DEGO-BNB LP STAKED</small>
              </div>
            </div>
            <div className="card-foot">
              <button>Unlock Wallet</button>
            </div>
            <div className="collapse-wrap">
              <a data-bs-toggle="collapse" href="#details-3" role="button" aria-expanded="false" aria-controls="details-3">
                Details
                <KeyboardArrowDownIcon />
              </a>
              <div class="collapse" id="details-3">
                <div class="card card-body">
                  <div className="content">
                  Total Liquidity:
                  <span>$6,558,139</span>
                  </div>
                  <a href="javascript:void(0)">
                  Get DEGO-BNB LP
                  <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ gqbVmy"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg>
                  </a>
                  <a href="javascript:void(0)">
                  View Contract
                  <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ gqbVmy"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg>
                  </a>
                  <a href="javascript:void(0)">
                  See Pair Info
                  <svg viewBox="0 0 24 24" color="primary" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ gqbVmy"><path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"></path></svg>
                  </a>
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

export default Farms
