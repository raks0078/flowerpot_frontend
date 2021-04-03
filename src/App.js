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
        <Drawer themeToggler={handleThemeToggle} theme={theme} />
        <div className="content-right">
          <Switch>
            <Route exact path="/launchpad" component={() => <Launchpad theme={theme} />} />
            <Route exact path="/pools" component={() => <Pools theme={theme} />} />
            <Route exact path="/ifo" component={() => <Ifo theme={theme} />} />
            <Route exact path="/liqudity" component={() => <Liquidity theme={theme} />} />
            <Route exact path="/nftc" component={() => <Nftc theme={theme} />} />
            <Route exact path="/farms" component={() => <Farms theme={theme} />} />
            <Route exact path="/tierList" component={() => <TierList theme={theme} />} />
            <Route exact path="/exchange" component={() => <Exchange theme={theme} />} />
      
          </Switch>
        </div>
      </StyledDiv>
    </ThemeProvider>
  )
}

export default App
