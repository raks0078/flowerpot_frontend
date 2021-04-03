import React, { useState } from "react"
import { Route, Switch } from "react-router-dom"
import styled, { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme, GlobalStyle } from "./themes"
import Drawer from "../src/components/Sidebar/Drawer"
import Header from "../src/components/Header/Header"
import Launchpad from "./pages/Launchpad"
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
        <div className="d-flex">
          <Drawer themeToggler={handleThemeToggle} theme={theme} />
          <div className="content-right">
            <Switch>
              <Route exact path="/launchpad" component={() => <Launchpad theme={theme} />} />
            </Switch>
          </div>
        </div>
        {/* <Footer /> */}
      </StyledDiv>
    </ThemeProvider>
  )
}

export default App
