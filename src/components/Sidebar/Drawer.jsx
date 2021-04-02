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
      <>
      {/* // <aside className="col-12 col-md-3 col-lg-2 px-0 drawer">
      //   <div className="drawer-header">
      //     <ul>
      //       <li>
      //         <a href="javascript:void(0)" onClick={this.props.themeToggler} className="nav-link theme-mode">
      //           <div className="toggle-icon-changer">
      //             <i className={`theme-icon theme-icon-left fa fa-sun-o ${this.props.theme === "light" ? "theme-active":null }`}></i>
      //             <div className="theme-separator">/</div>
      //             <i className={`theme-icon theme-icon-right fa fa-moon-o ${this.props.theme === "light" ? null : "theme-active"}`}></i>
      //           </div>
      //           <span onClick={()=>this.setState({islight:true})}>Theme Mode</span>
      //         </a>
      //       </li>
      //     </ul>
      //   </div>
      // </aside> */}
      </>
    )
  }
}
export default Drawer