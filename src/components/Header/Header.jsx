import React, { Component } from "react"
import logo from "../../images/logo.svg"
import Button from '@material-ui/core/Button';
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import flower from "../../images/flower.png"
import Header from "./Header.scss"


class HeaderMian extends Component {
  constructor(props) {
    super(props)

    this.state = {
        isOpen:false
    }
  }

    handleCloseHotPair = () => {
    this.setState({
      isOpen:false
    })
  }

  render() {
    const {isOpen} = this.state
    return (
      <>
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
            <button onClick={()=>this.setState({isOpen:true})}>Connect</button>
            <a href="javascript:void(0)" className="profile">
              <img src={flower} />
            </a>
          </div>
        </div>       
      </nav>
      <Dialog open={isOpen} onClose={this.handleCloseHotPair} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
              {/* <img src={logocompressed} alt="" /> */}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description" className="mb-0">
                These pairs are the most viewed by DEXT users in real time, they are shown with a 1 minute delay for free users. These pairs are decided by the community visits and do not represent any investment advice or endorsement from the DEXTools team.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCloseHotPair} className="btn btn-info">
                Close
              </Button>
            </DialogActions>
          </Dialog>
          </>
    )
  }
}

export default HeaderMian
