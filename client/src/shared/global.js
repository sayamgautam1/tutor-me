import { createGlobalStyle } from "styled-components";
import { fonts } from "./variable";

export const GlobalStyle = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap');
    
    html {
        font-size: 100%;
        box-sizing: border-box;
    }

    *, *::before, *::after {
        box-sizing: inherit;
        margin:0;
        padding:0;
    }

    body {
        font-family: ${fonts.FontBody};
    }


`;
