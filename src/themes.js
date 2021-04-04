import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  body: "#ffffff",
  fontColor: "#4D774E",
  navshadow: "0 0 5px rgba(22, 74, 65, .5)",
  commoncolor: "#010415",
  oppositcolor: "#9DC88D",
  buttonhover: "#1c584e",
  drawershadow: "0 7px 5px rgba(22, 74, 65, .5)",
  lightcolor: "#f1f1f1",
}

export const darkTheme = {
  body: "#164A41",
  fontColor: "#4D774E",
  navshadow: "0 0 5px rgba(77, 119, 78, .5)",
  commoncolor: "#9DC88D",
  oppositcolor: "#164A41",
  buttonhover: "#8cbb7a",
  drawershadow: "0 7px 5px rgba(77, 119, 78, .5)",
}

export const GlobalStyle = createGlobalStyle`

  
    body {
            background-color: ${(props) => props.theme.body};
        }
        nav{
          box-shadow: ${(props) => props.theme.navshadow};
        }
        nav .container-fluid .nav-left button svg path {
          fill: ${(props) => props.theme.fontColor};
      }
      nav .container-fluid .nav-left a {
        color: ${(props) => props.theme.commoncolor};
    }
    nav .container-fluid .nav-right button{
      background-color: ${(props) => props.theme.fontColor};
      color: ${(props) => props.theme.oppositcolor};
      border-color: ${(props) => props.theme.fontColor};
    }
    nav .container-fluid .nav-right button:hover{
      background-color: ${(props) => props.theme.buttonhover};
      border-color: ${(props) => props.theme.buttonhover};
    }
    .drawer{
      box-shadow: ${(props) => props.theme.drawershadow};
    }
    .drawer ul li a span svg path {
      fill: ${(props) => props.theme.fontColor};
  }
  .drawer ul .collapse, .drawer ul .collapsing{
    background-color: ${(props) => props.theme.lightcolor};
  }
  .drawer ul li a.active {
    border-left-color: ${(props) => props.theme.commoncolor};
}
.drawer ul .theme-mode a .toggle-icon-changer .theme-icon-left{
  color: ${(props) => props.theme.fontColor};
}
.drawer .aside-bottom .social a svg path {
  fill: ${(props) => props.theme.fontColor};
}
.farms-content .tool-wrap, 
.pools-content .tool-wrap, 
.ifo-content .tool-wrap{
  background-color: ${(props) => props.theme.lightcolor};
}

`
