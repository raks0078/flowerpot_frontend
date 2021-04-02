import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

// import logocompressed from "../../images/logo-compressed.png"
// import logo from "../../images/logo.png"
// import logolight from "../../images/logo-light.png"
import "./Drawer.scss"

class Drawer extends Component {


  constructor(props) {
    super(props)
  
    this.state = {
       islight: false,
       dummy:null
    }
  }
  
  render() {
    const {islight} = this.state;
    return (
      <aside className="col-12 col-md-3 col-lg-2 px-0 drawer">
        <div className="drawer-header">
          <a href="javascript:void(0)" className="logo-compressed">
            {/* <img src={logocompressed} /> */}
          </a>
          <a href="javascript:void(0)" className="logo">
          {this.props.theme === "light" ? <React.Fragment>
            {/* <img src={logolight} /> */}
          </React.Fragment>:<React.Fragment>
            {/* <img src={logo} />  */}
          </React.Fragment>}
          </a>
        </div>
        <div className="drawer-body">
          <h6>DEXTboard</h6>
          <ul>
            <li>
              <NavLink className="nav-link" activeClassName="active" to="/dextboard">
              <i className="fa fa-home fa-2x"></i>
                <span>DEXTboard</span>
              </NavLink>
            </li>
          </ul>
          <h6 className="uniswap">uniswap</h6>
          <ul>
            <li>
              <NavLink className="nav-link" activeClassName="active" to="/pool-explorer">
              <i className="fa fa-link fa-2x"></i>
                <span>Pool Explorer</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" activeClassName="active" to="/pair-explorer">
              <i className="fa fa-wpexplorer fa-2x"></i>
                <span>Pair Explorer</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" activeClassName="active" to="/big-swap-explorer">
                <i className="fa fa-ship fa-2x"></i>
                <span>Big Swap Explorer</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" activeClassName="active" to="/multiswap">
              <i className="fa fa-columns fa-2x"></i>
                <span>MultiSwap</span>
              </NavLink>
            </li>
          </ul>
          <h6>Others</h6>
          <ul>
            <li>
              <NavLink className="nav-link" activeClassName="active" to="/user-account">
              <i className="fa fa-user fa-2x"></i>
                <span>User Account</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" activeClassName="active" to="/configuration">
              <i className="fa fa-cogs fa-2x"></i>
                <span>Configuration</span>
              </NavLink>
            </li>
            <li>
              <a className="nav-link" activeClassName="active" href="https://app.uniswap.org/#/swap?inputCurrency=0x26ce25148832c04f3d7f26f32478a9fe55197166" target="_blank">
              <i className="fa fa-bank fa-2x"></i>
                <span>Buy DEXT</span>
              </a>
            </li>
          </ul>
          <h6>Theme</h6>
          <ul>
            <li>
              <a href="javascript:void(0)" onClick={this.props.themeToggler} className="nav-link theme-mode">
                <div className="toggle-icon-changer">
                  <i className={`theme-icon theme-icon-left fa fa-sun-o ${this.props.theme === "light" ? "theme-active":null }`}></i>
                  <div className="theme-separator">/</div>
                  <i className={`theme-icon theme-icon-right fa fa-moon-o ${this.props.theme === "light" ? null : "theme-active"}`}></i>
                </div>
                <span onClick={()=>this.setState({islight:true})}>Theme Mode</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    )
  }
}
export default Drawer