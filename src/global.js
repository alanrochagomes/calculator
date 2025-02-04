import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: #1E1E1E;
        color: #FFFFFF;
        overflow: hidden;
    }

    html, body, #root {
        width: 100%;
        height: 100%;
    }
`