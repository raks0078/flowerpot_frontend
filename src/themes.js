import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  body: "#f5f6f8",
  fontColor: "#5a6169",
}

export const darkTheme = {
  body: "#020416",
  fontColor: "#cacedb",
}

export const GlobalStyle = createGlobalStyle`

  
    body {
            background-color: ${(props) => props.theme.body};
        }




`
