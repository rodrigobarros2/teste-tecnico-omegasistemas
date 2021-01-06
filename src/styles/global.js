import { createGlobalStyle } from 'styled-components';
import MontserratRegular from '../fonts/Montserrat-Regular.ttf';

export default createGlobalStyle`
    * {
		font: 16px 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
	@font-face {
		font-family: Montserrat;
		src: url(${MontserratRegular});
    }
    body {
        -webkit-font-smoothing: antialiased !important;
    }
    body, input, button {
		font: 14px 'Montserrat', sans-serif;
    }
    html, body, #root {
        height: 100%;
    }
    a {
        text-decoration: none;
    }
    ul {
        list-style: none;
    }
    button {
        cursor: pointer;
    }
`;
