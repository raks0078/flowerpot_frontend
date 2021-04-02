import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
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
      <>
        <aside className="drawer">
          <div className="container-fluid">
            <ul>
              <li>
                <a data-bs-toggle="collapse" href="#dashboard-options" role="button" aria-expanded="false" aria-controls="dashboard-options">
                  Dashboard
                  <KeyboardArrowDownIcon />
                </a>
                <div class="collapse" id="dashboard-options">
                  <ul>
                    <li>
                      <a href="javascript:void(0)">Launchpad</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Launch Request</a>
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
          </div>
         </aside>
      </>
    )
  }
}
export default Drawer