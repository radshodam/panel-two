import styled from "styled-components"

export const StyleRow = styled.div`
    display: flex;
    padding: 35px;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;`

export const StyleSearch = styled.input`
width: 320px;
height: 45px;
border-radius: 25px;
border: none;
box-shadow: 0px 3px 6px #707070;
padding: 5px 21px;
outline: none;
&:focus {
  border: 1px solid #707070;
}
`
export const StyledBTn = styled.button`
background-image: linear-gradient(#8F65F6, #7B4AF1);
    width: 200px;
    height: 59px;
    outline: none;
    border: none;
    border-radius: 7px;
    box-shadow: 0px 3px 6px #707070;
    color: white;
    :hover{
      cursor: pointer;
      transition:ease-in 800ms;
      background-image: linear-gradient(#726497, #7B4AF1);
    }
    
    `

