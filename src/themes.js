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
            color: ${(props) => props.theme.commoncolor} !important;
        }
        nav{
          box-shadow: ${(props) => props.theme.navshadow};
        }
        nav .container-fluid .nav-left button svg path {
          fill: ${(props) => props.theme.commoncolor};
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
      fill: ${(props) => props.theme.commoncolor};
  }
  .drawer ul .collapse, .drawer ul .collapsing{
    background-color: ${(props) => props.theme.lightcolor};
  }
  .drawer ul li a.active {
    background-color: ${(props) => props.theme.commoncolor};
    color: ${(props) => props.theme.oppositecommoncolor};
}
.drawer ul .theme-mode a .toggle-icon-changer .theme-icon-left, 
.drawer ul .theme-mode a .toggle-icon-changer .theme-icon-right, 
.drawer ul .theme-mode a .toggle-icon-changer .theme-separator{
  color: ${(props) => props.theme.commoncolor};
}
.drawer .aside-bottom .social a svg path {
  fill: ${(props) => props.theme.commoncolor};
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
.liquidity-content .card, 
.farms-content .card-wrap .card, 
.pools-content .card-wrap .card, 
.collectible-content .card-wrap .card, 
.ifo-content .card-wrap .card{
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
.tierlist-content .card-wrap .card .card-body, 
.farms-content .card-wrap .card .card-body .table-wrap .content, 
.farms-content .card-wrap .collapse-wrap, 
.pools-content .card-wrap .card .card-body .table-wrap .content, 
.pools-content .card-wrap .collapse-wrap, 
.collectible-content .card-wrap .collapse-wrap, 
.ifo-content .card-wrap .collapse-wrap, 
.tierlist-content .card-wrap .card .card-foot{
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
.farms-content h1, 
.pools-content h1, 
.collectible-content h1, 
.ifo-content h1, 
.ifo-content ul, 
.ifo-content p{
  color: ${(props) => props.theme.commoncolor};
}
.exchange-content .card .card-head, 
.liquidity-content .card .card-head{
  border-bottom-color: ${(props) => props.theme.borderlightcolor};
}
.launchpad-content .card-wrap .card .card-body .progress-bar, 
.exchange-content .card .card-body .content, 
.ifo-content .card-wrap .card .card-banner{
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.commoncolor};
}
.tierlist-content .card-wrap .card .card-body .table-wrap .content span{
  background-color: ${(props) => props.theme.body};
  border-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.commoncolor};
}
.liquidity-content .card .card-body .liquidity svg, 
.farms-content .tool-wrap, 
.pools-content .tool-wrap, 
.collectible-content .card-wrap .collapse-wrap .collapse .card, 
.collectible-content .card-wrap .collapse-wrap .collapsing .card{
  color: ${(props) => props.theme.themetextcolor};
}
.farms-content .tool-wrap .tool-left button svg path{
  fill: ${(props) => props.theme.themetextcolor};
}
.farms-content .tool-wrap .tool-left .form-check input, 
.pools-content .tool-wrap .tool-left .form-check input{
  background-color: ${(props) => props.theme.themetextcolor};
  border-color: ${(props) => props.theme.themetextcolor};
}
.farms-content .tool-wrap .tool-left .btn-group, 
.pools-content .tool-wrap .tool-left .btn-group, 
.ifo-content .tool-wrap .tool-left .btn-group{
  background-color: ${(props) => props.theme.body};
}
.farms-content .tool-wrap .tool-left .btn-group .btn.active, 
.pools-content .tool-wrap .tool-left .btn-group .btn.active, 
.ifo-content .tool-wrap .tool-left .btn-group .btn.active{
  border-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.oppositecommoncolor};
  background-color: ${(props) => props.theme.commoncolor};
}
.farms-content .tool-wrap .tool-right .form-group .form-control{
  color: ${(props) => props.theme.themetextcolor};
  background-color: ${(props) => props.theme.body};
  border-color: ${(props) => props.theme.body};
}
.farms-content .card-wrap .card .card-head .core, 
.farms-content .card-wrap .card .card-head span, 
.pools-content .card-wrap .collapse-wrap .core{
  background-color: ${(props) => props.theme.body};
  border-color: ${(props) => props.theme.body};
}
.MuiPaper-root{
  background-color: ${(props) => props.theme.lightcolor} !important;
}
.MuiDialogTitle-root h2, 
.MuiDialogTitle-root h2 svg{
  color: ${(props) => props.theme.commoncolor};
}
.MuiDialogContent-root .wallet-wrap a{
  background-color: ${(props) => props.theme.body};
  border-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.commoncolor};
}
button{
  background-color: ${(props) => props.theme.commoncolor} !important;
  color: ${(props) => props.theme.oppositecommoncolor} !important;
  border-color: ${(props) => props.theme.commoncolor} !important;
}
.tierlist-content .card-wrap .card .card-foot span{
  background-color: ${(props) => props.theme.commoncolor};
  color: ${(props) => props.theme.oppositecommoncolor};
  border-color: ${(props) => props.theme.commoncolor};
}
.exchange-content .card .card-head .card-head-right button, 
.liquidity-content .card .card-head .card-head-right button{
  color: ${(props) => props.theme.commoncolor} !important;
}
a, 
a:hover{
  color: ${(props) => props.theme.commoncolor};
}
.drawer ul li a.active span svg path{
  fill: ${(props) => props.theme.oppositecommoncolor};
}
.exchange-content .card .card-head .card-head-right button svg path, 
.liquidity-content .card .card-head .card-head-right button svg path, 
.farms-content .card-wrap .card .card-head .core svg path, 
.farms-content .card-wrap .card .card-head span svg path, 
.pools-content .card-wrap .collapse-wrap .core svg path, 
.farms-content .card-wrap .card .card-body .table-wrap .content svg, 
.farms-content .card-wrap .collapse-wrap .collapse .card a svg, 
.farms-content .card-wrap .collapse-wrap .collapsing .card a svg, 
.ifo-content .card-wrap .collapse-wrap .collapse .card a svg, 
.ifo-content .card-wrap .collapse-wrap .collapsing .card a svg{
  fill: ${(props) => props.theme.commoncolor} !important;
}
.exchange-content .card .card-body button svg path{
  fill: ${(props) => props.theme.oppositecommoncolor} !important;
}

`
