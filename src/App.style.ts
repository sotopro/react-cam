import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    max-width: 1080px;
    margin: 0 auto;
    width: 100%;
    height: 100vh;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    h1 {
        font-size: 2.5rem;
    }
`
export const Canvas = styled.canvas`
    width: 100%;
    height: 100%;
`

export const Video = styled.video`
    display: flex;
    width: 666px;
    height: 500px;
    object-fit: cover;
    object-position: center;
    background: #000;
`

export const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`

export const Button = styled.button`
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 14px;
    display: inline-block;
    position: relative;
    text-align: center;
    color: #00c7ec;
    border: 1px solid #00c7ec;
    border-radius: 5px;
    line-height: 2em;
    padding-left: 2em;
    padding-right: 2em;
    box-shadow: 0 0 0 0 transparent;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    &:hover {
        color: white;
        box-shadow: 0 0 30px 0 rgba(0, 199, 236, 0.5);
        background-color: #00c7ec;
        -webkit-transition: all 0.2s ease-out;
        -moz-transition: all 0.2s ease-out;
        transition: all 0.2s ease-out;
    }
    :hover:before {
        -webkit-animation: shine 0.5s 0s linear;
        -moz-animation: shine 0.5s 0s linear;
        animation: shine 0.5s 0s linear;
    }
    :active {
        box-shadow: 0 0 0 0 transparent;
        -webkit-transition: box-shadow 0.2s ease-in;
        -moz-transition: box-shadow 0.2s ease-in;
        transition: box-shadow 0.2s ease-in;
    }
    :before {
        content: "";
        display: block;
        width: 0px;
        height: 86%;
        position: absolute;
        top: 7%;
        left: 0%;
        opacity: 0;
        background: white;
        box-shadow: 0 0 15px 3px white;
        -webkit-transform: skewX(-20deg);
        -moz-transform: skewX(-20deg);
        -ms-transform: skewX(-20deg);
        -o-transform: skewX(-20deg);
        transform: skewX(-20deg);
    }
    @-webkit-keyframes shine {
    from {
        opacity: 0;
        left: 0%;
    }
    50% {
        opacity: 1;
    }
    to {
        opacity: 0;
        left: 100%;
    }
    }
    @-moz-keyframes shine {
    from {
        opacity: 0;
        left: 0%;
    }
    50% {
        opacity: 1;
    }
    to {
        opacity: 0;
        left: 100%;
    }
    }
    @keyframes shine {
    from {
        opacity: 0;
        left: 0%;
    }
    50% {
        opacity: 1;
    }
    to {
        opacity: 0;
        left: 100%;
    }
    }
`;

export const Controls = styled.div`
    display: flex;
    flex-direction: row;
    align-items: space-between;
    justify-content: center;
    flex: 1;
    margin-top: 1em;
`