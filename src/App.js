import React, { useState } from "react"
import { Route, Switch } from "react-router-dom"
import styled, { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyle } from "./themes"
import Drawer from "../src/components/Sidebar/Drawer"

const StyledDiv = styled.div`
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.sidebarBgColor};
`

const App = () => {
  const [theme, setTheme] = useState("dark")

  const handleThemeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <StyledDiv>
        <Drawer themeToggler={handleThemeToggle} theme={theme} />
        <Switch>{/* <Route exact path="/" component={() => (<DextBoard theme={theme} />)}/>
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
