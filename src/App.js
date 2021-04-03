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

const StyledDiv = styled.div`
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.sidebarBgColor};
`

const App = () => {
  const [theme, setTheme] = useState("light")

  const handleThemeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <StyledDiv>
        <Header theme={theme} />
<<<<<<< HEAD
        <div className="d-flex">
          <Drawer themeToggler={handleThemeToggle} theme={theme} />
          <div className="content-right">
            <Switch>
              <Route exact path="/launchpad" component={() => <Launchpad theme={theme} />} />
            </Switch>
          </div>
=======
        <Drawer themeToggler={handleThemeToggle} theme={theme} />
        <div className="content-right">
          <Switch>
            <Route exact path="/launchpad" component={() => <Launchpad theme={theme} />} />
            <Route exact path="/pools" component={() => <Pools theme={theme} />} />
            <Route exact path="/ifo" component={() => <Ifo theme={theme} />} />
            <Route exact path="/liqudity" component={() => <Liquidity theme={theme} />} />
            <Route exact path="/nftc" component={() => <Nftc theme={theme} />} />
            <Route exact path="/farms" component={() => <Farms theme={theme} />} />
            <Route exact path="/tierlist" component={() => <TierList theme={theme} />} />
            <Route exact path="/exchange" component={() => <Exchange theme={theme} />} />
            <Route exact path="/launchreq" component={() => <LaunchReq theme={theme} />} />
          </Switch>
>>>>>>> d393c1a47e47b52ab3735c14dfdecf9c75915627
        </div>
      </StyledDiv>
    </ThemeProvider>
  )
}

export default App
