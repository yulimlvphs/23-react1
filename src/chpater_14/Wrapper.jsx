import React from "react";
import styled from "styled-components";

const Wrapper = styled.div `
    padding: 1em;
    background: red;
`;

const Tiltle = styled.h1 `
    font-size: 1.5em;
    color: white;
    text-align: center;
`;

function MainPage(props){
    return(
        <Wrapper>
            <Tiltle>
                안녕.리액트
            </Tiltle>
        </Wrapper>
    )
}

export default MainPage