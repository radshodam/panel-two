import styled from "styled-components"
const StyleRow = styled.div`
    display: flex;
    padding: 35px;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;`

const StyleSearch = styled.input`
width: 320px;
height: 45px;
border-radius: 25px;
border: none;
box-shadow: 0px 3px 6px grey;
padding: 5px 21px;
outline: none;
&:focus {
  border: 1px solid #afafaf;
}
`
const StyledBTn = styled.button`
background-image: linear-gradient(#8F65F6, #7B4AF1);
    width: 200px;
    height: 59px;
    outline: none;
    border: none;
    border-radius: 7px;
    color: white;`

const Dashboard = () => {
    return (
        <StyleRow>
            <StyleSearch type="search" id="site-search" name="q" placeholder="جستجو در محصولات" />
            <StyledBTn>افزودن محصول</StyledBTn>
        </StyleRow>
    )
}

export default Dashboard
