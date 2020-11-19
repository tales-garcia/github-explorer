import { createGlobalStyle } from "styled-components";
import githubBackground from '../images/github.svg';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body {
        background: #F0F0F5 url(${githubBackground}) no-repeat 70% top;
        -webkit-font-smoothing: antialiased;
    }
    body, input, button {
        font-size: 16px;
        font-family: Roboto, sans-serif;
    }
    #root {
        max-width: 960px;
    }
    button {
        cursor: pointer;
    }
`;