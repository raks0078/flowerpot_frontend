import React, { Component } from "react"
import logo from "../../images/logo.svg"
import flower from "../../images/flower.png"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Header from "./Header.scss"

class HeaderMian extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <nav>
        <div className="container-fluid">
          <div className="nav-left">
            <button>
              <svg viewBox="0 0 24 24" width="24px" color="textSubtle" xmlns="http://www.w3.org/2000/svg" class="sc-bdfBwQ eoJgOh"><path d="M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z"></path></svg>
            </button>
            <a href="javascript:void(0)">
              <img src={logo} />
              Flowerpot
              <span> Swap</span>
            </a>
          </div>
          <div className="nav-right">
            <button>Connect</button>
            <a href="javascript:void(0)" className="profile">
              <AccountCircleIcon />
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default HeaderMian
