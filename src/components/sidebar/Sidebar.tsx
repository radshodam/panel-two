
import React, { useState } from 'react'
import styled from 'styled-components'
import ItemMain from './ItemMain'
import Icon from '../icon/Icon'

const StyledAsid = styled.aside`
    background-color: antiquewhite;
    width: 16.5%;
    border-top-left-radius: 3vw;
    border-bottom-left-radius: 3vw;
    background-image: linear-gradient(#8F65F6, #7B4AF1);
    height: fit-content;
    p{
        display: inline-block;
    }
    @media screen and (max-width: 815px) {
        width: 100px;
        p{
            display: none;
        }
    }
    `
const StyleButtonHamber = styled.button`
     position: absolute;
     right: 7px;
    top: 10px;
     background: transparent;
    font-size: 22px;
    outline: none;
    border: none;
    `


const StyleSideList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    
    
    `
const StyledLogo = styled.div`
    height: 250px;
        padding: 50;
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
    `

const lists = [
    { name: "داشبورد", link: "/", icon: "home-outline" },
    { name: "پیام ها", link: "/messages", icon: "chat-alt" },
    { name: "مدیریت محصول", link: "/productManagement", icon: "layers-alt" },
    { name: "حساب کاربری ویژه", link: "/SpecialAccount", icon: "user" },
    { name: "گزارش گیری", link: "/Reporting", icon: "th-large-outline" },
    { name: "حسابداری", link: "/Accounting", icon: "doc" },
    { name: "فروشگاه", link: "/Store", icon: "shop" },
    { name: "تنظیمات", link: "/Settings", icon: "cog" },
    { name: "پشتیبانی", link: "/Support", icon: "volume-control-phone" },
    { name: "قوانین و راهنما", link: "/RulesGuidelines", icon: "layers" }]




const Sidebar: React.FC = () => {

    const [showslide, setShowslide] = useState(true)
    const [showbtn, setShowbtn] = useState(false)

    const handleClick = () => {
        setShowslide(!showslide)
        setShowbtn(!showbtn)

    }

    return (<>
        <StyleButtonHamber onClick={handleClick}>{
            showbtn ? (<Icon iconTitle={"menu-outline"} color={"#5b27ce"} size={45} />)
                : <Icon iconTitle={"cancel-outline"} color={"#5b27ce"} size={45} />
        }</StyleButtonHamber>

        {showslide ?
            (<StyledAsid >
                <StyledLogo>logo</StyledLogo>
                <StyleSideList>
                    {
                        lists.map((list) => {
                            return (
                                <ItemMain name={list.name} link={list.link} iconTitle={list.icon} />
                            )
                        })
                    }
                </StyleSideList>
            </StyledAsid>) : (null)
        }
    </>
    )
}

export default Sidebar
