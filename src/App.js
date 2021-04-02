import React, { useState } from "react"
import { Route, Switch } from "react-router-dom"
import styled, { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyle } from "./themes"
import Drawer from "../src/components/Sidebar/Drawer"
import Header from "../src/components/Header/Header"
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
        <Switch>
          <div className="">
            
          </div>
          {/* <Route exact path="/" component={() => (<DextBoard theme={theme} />)}/>
            <Route exact path="/dextboard" component={() => (<DextBoard theme={theme} />)}/>
            <Route exact path="/pool-explorer" component={() => (<PoolExplorer theme={theme} />)} />
            <Route exact path="/big-swap-explorer" component={() => (<BigSwapExplorer theme={theme} />)} />
            <Route exact path="/multiswap" component={() => (<MultiSwap theme={theme} />)} />
            <Route exact path="/user-account" component={() => (<UserAccount theme={theme} />)} />
            <Route exact path="/pair-explorer" component={() => (<PairExplorer theme={theme} />)} />
            <Route exact path="/configuration" component={() => (<Configuration theme={theme} />)} /> */}</Switch>
        {/* <Footer /> */}
      </StyledDiv>
    </ThemeProvider>
  )
}

export default App
