import React, { Component } from "react"
import { Link, NavLink } from "react-router-dom"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"
import "./Drawer.scss"

class Drawer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      islight: false,
      dummy: null,
    }
  }

  render() {
    const { islight } = this.state
    return (
      <>
        <aside className="drawer">
            <ul>
              <li>
                <a data-bs-toggle="collapse" href="#dashboard-options" role="button" aria-expanded="false" aria-controls="dashboard-options">
                  <span>
                    <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ eNHRIG"><path d="M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z"></path></svg>
                    Dashboard
                  </span>
                  <KeyboardArrowDownIcon />
                </a>
                <div class="collapse" id="dashboard-options">
                  <ul>
                    <li>
                      <NavLink activeClassName="active" to="/launchpad">
                        Launchpad
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/launchreq">Launch Request</NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/tierlist">Tierlist</NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#trade-options" role="button" aria-expanded="false" aria-controls="trade-options">
                  <span>
                  <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ eNHRIG"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z"></path></svg>
                    Trade
                  </span>
                  <KeyboardArrowDownIcon />
                </a>
                <div class="collapse" id="trade-options">
                  <ul>
                    <li>
                    <NavLink activeClassName="active" to="/exchange">Exchange</NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/liqudity">Liquidity</NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <NavLink activeClassName="active" to="/farms">
                  <span>
                  <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ eNHRIG"><path d="M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z"></path><path d="M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z"></path></svg>
                  Farms
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/pools">
                  <span>
                  <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ eNHRIG"><path d="M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z"></path></svg>
                  Pools
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active" to="/nftc">
                  <span>
                  <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ eNHRIG"><path d="M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z"></path></svg>
                  NFT Collectible
                  </span>
                </NavLink>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <span>
                  <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ eNHRIG"><path d="M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z"></path></svg>
                  info 
                  </span>
                </a>
              </li>
              <li>
                <NavLink activeClassName="active" to="/ifo">
                  <span>
                  <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ eNHRIG"><path d="M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z"></path></svg>
                  ifo 
                  </span>
                </NavLink>
              </li>
              <li>
                <a data-bs-toggle="collapse" href="#more-options" role="button" aria-expanded="false" aria-controls="more-options">
                  <span>
                  <svg viewBox="0 0 24 24" width="24px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ eNHRIG"><path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path></svg>
                  More
                  </span>
                  <KeyboardArrowDownIcon />
                </a>
                <div class="collapse" id="more-options">
                  <ul>
                    <li>
                    <a href="javascript:void(0)">Github</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Docks</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Blog</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">BSCSCAN</a>
                    </li>
                  </ul>
                </div>
              </li>
              {/* <li>
                <a href="javascript:void(0)" onClick={this.props.themeToggler} className="nav-link theme-mode">
                  <div className="toggle-icon-changer">
                    <i className={`theme-icon theme-icon-left fa fa-sun-o ${this.props.theme === "light" ? "theme-active":null }`}></i>
                    <div className="theme-separator">/</div>
                    <i className={`theme-icon theme-icon-right fa fa-moon-o ${this.props.theme === "light" ? null : "theme-active"}`}></i>
                  </div>
                  <span onClick={()=>this.setState({islight:true})}>Theme Mode</span>
                </a>
              </li> */}
            </ul>
        </aside>
      </>
    )
  }
}
export default Drawer
