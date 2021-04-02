import { createGlobalStyle } from "styled-components"

export const lightTheme = {
  body: "#9DC88D",
  fontColor: "#4D774E",
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
