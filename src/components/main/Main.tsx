import React from 'react'
import styled from 'styled-components';
import { Switch } from "react-router-dom";

const StyledMain = styled.main`
background-color: white;
width: 100%;

`
const StyledBox = styled.div`
width: 76.6%;
background: white;
margin: 140px 13%;
border-radius: 9px;
height: 1000px; 
 box-shadow: #dce9f5 2px 0px 8px;


`

const Main: React.FC = ({ children }) => {
    return (
        <StyledMain>
            <StyledBox>
                <Switch>
                    {children}
                </Switch>
            </StyledBox>
        </StyledMain>
    )
}

export default Main
