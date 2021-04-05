import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  body: "#ffffff",
  fontColor: "#4D774E",
  navshadow: "0 0 5px rgba(22, 74, 65, .5)",
  commoncolor: "#000000",
  greencolor: "#C3D55F",
  buttonhover: "#1c584e",
  drawershadow: "0 7px 5px rgba(22, 74, 65, .5)",
  lightcolor: "#f1f1f1",
  fontweight: "bold",
  oppositecommoncolor: "#f1f1f1",
  borderlightcolor: "rgba(195, 213, 95, 0.1)",
  themetextcolor: "#000000",
}

export const darkTheme = {
  body: "#000000",
  fontColor: "#4D774E",
  navshadow: "0 0 5px rgba(241, 241, 241, .1)",
  commoncolor: "#f1f1f1",
  greencolor: "#C3D55F",
  buttonhover: "#1c584e",
  drawershadow: "0 7px 5px rgba(241, 241, 241, .1)",
  lightcolor: "#0a0a0a",
  fontweight: "200",
  oppositecommoncolor: "#000000",
  borderlightcolor: "rgba(0, 0, 0, 0.1)",
  themetextcolor: "#707070",
}

export const GlobalStyle = createGlobalStyle`

  
    body {
            background-color: ${(props) => props.theme.body};
            font-weight: ${(props) => props.theme.fontweight};
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
      color: ${(props) => props.theme.greencolor};
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
    border-left-color: ${(props) => props.theme.buttonhover};
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
.drawer ul li a{
  color: ${(props) => props.theme.commoncolor};
}
.launchpad-content .card-wrap .card, 
.tierlist-content .card-wrap .card, 
.exchange-content .card, 
.liquidity-content .card{
  background-color: ${(props) => props.theme.lightcolor};
  border-color: ${(props) => props.theme.lightcolor};
  color: ${(props) => props.theme.themetextcolor};
}
.launchpad-content .card-wrap .card .card-head span, 
.tierlist-content .card-wrap .card .card-body span{
  background-color: ${(props) => props.theme.commoncolor};
  color: ${(props) => props.theme.oppositecommoncolor};
}
.launchpad-content .card-wrap .card .card-body .table-wrap .content, 
.tierlist-content .card-wrap .card .card-body{
  border-top-color: ${(props) => props.theme.borderlightcolor};
}
.launchreq-content form .form-group .form-control{
  background-color: ${(props) => props.theme.lightcolor};
  border-color: ${(props) => props.theme.lightcolor};
  color: ${(props) => props.theme.themetextcolor};
}
::-webkit-input-placeholder{
  color: ${(props) => props.theme.themetextcolor} !important;
}
:-ms-input-placeholder{
  color: ${(props) => props.theme.themetextcolor} !important;
}
::placeholder {
  color: ${(props) => props.theme.themetextcolor} !important;
}
.launchpad-content h1, 
.launchreq-content h1, 
.tierlist-content h1, 
.exchange-content h1, 
.liquidity-content h1, 
.farms-content h1{
  color: ${(props) => props.theme.commoncolor};
}
.exchange-content .card .card-head, 
.liquidity-content .card .card-head{
  border-bottom-color: ${(props) => props.theme.borderlightcolor};
}
.launchpad-content .card-wrap .card .card-body .progress-bar, 
.exchange-content .card .card-body .content{
  background-color: ${(props) => props.theme.body};
}
.tierlist-content .card-wrap .card .card-body .table-wrap .content span{
  background-color: ${(props) => props.theme.body};
  border-color: ${(props) => props.theme.body};
}
.liquidity-content .card .card-body .liquidity svg, 
.farms-content .tool-wrap{
  color: ${(props) => props.theme.themetextcolor};
}

`
