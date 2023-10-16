'use client';
import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;

}

html, body { 
    width: 100%;
    height: 100%;
    background: linear-gradient(299.75deg, #b9d5ff 0%, #f6d1fc 98.93%)
}

body {
    padding: 10px;
}

input {
    font-size:unset;
    font-weight:unset;
    color: unset;
}
`;
