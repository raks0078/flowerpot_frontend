import React, { useState } from "react"
import { Route, Switch } from "react-router-dom"
import styled, { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyle } from "./themes"
import Drawer from "../src/components/Sidebar/Drawer"
import Header from "../src/components/Header/Header"
import Launchpad from "./pages/Launchpad"
import Pools from "./pages/Pools"
import Ifo from "./pages/Ifo"
import Liquidity from "./pages/Liquidity"
import Nftc from "./pages/Nftc"
import Farms from "./pages/Farms"
import TierList from "./pages/TierList"
import Exchange from "./pages/Exchange"
import LaunchReq from "./pages/LaunchReq"
import flowersbackground from "./images/flowers-bg.png"
import stageOne from "./images/stage-1.png"
import stageOneDark from "./images/stage-1-dark.png"
import basket from "./images/basket.png"
import sprinkler from "./images/hand-sprinkler.png"
import basketdark from "./images/basket-dark.png"
import sprinklerdark from "./images/hand-sprinkler-dark.png"
import "./App.css"

const StyledDiv = styled.div`
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.sidebarBgColor};
`

const App = () => {
  const [theme, setTheme] = useState("light")
  const [drawer, setDrawer] = useState(false)

  const handleThemeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  const drawerhandler = (getDrawer) => {
    setDrawer(getDrawer)
  }
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <StyledDiv>
        <Header theme={theme} drawerhandler={drawerhandler} drawer={drawer} />
        <div className="d-flex main-content">
          <Drawer themeToggler={handleThemeToggle} theme={theme} drawer={drawer} />
          <Switch>
            <div className="content-right">
              <div className="flowers-bg">
                <img src={flowersbackground} />
              </div>
              <div className="leaves-img">
                {theme === "light" ? (
                  <React.Fragment>
                    <img src={basket} className="basket" />
                    <img src={sprinkler} className="sprinkler" />
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <img src={basketdark} className="basket" />
                    <img src={sprinklerdark} className="sprinkler" />
                  </React.Fragment>
                )}
              </div>
              <Route exact path="/" component={() => <Launchpad theme={theme} />} />
              <Route exact path="/launchpad" component={() => <Launchpad theme={theme} />} />
              <Route exact path="/pools" component={() => <Pools theme={theme} />} />
              <Route exact path="/ifo" component={() => <Ifo theme={theme} />} />
              <Route exact path="/liqudity" component={() => <Liquidity theme={theme} />} />
              <Route exact path="/nftc" component={() => <Nftc theme={theme} />} />
              <Route exact path="/farms" component={() => <Farms theme={theme} />} />
              <Route exact path="/tierlist" component={() => <TierList theme={theme} />} />
              <Route exact path="/exchange" component={() => <Exchange theme={theme} />} />
              <Route exact path="/launchreq" component={() => <LaunchReq theme={theme} />} />
            </div>
          </Switch>
        </div>
      </StyledDiv>
    </ThemeProvider>
  )
}

export default App
