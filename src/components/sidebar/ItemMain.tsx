import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "../icon/Icon";
const StyledItemSide = styled.li`
  padding-right: 3vw;
  padding-top: 34px;
  padding-bottom: 34px;
  a {
    text-decoration: none;
    color: white;
    padding-right: 7px;
  }
`;

interface Links {
  name: string;
  link: string;
  iconTitle: string;
}

const ItemMain: React.FC<Links> = ({ name, link, iconTitle }) => {
  return (
    <StyledItemSide>
      <Link to={link}>
        <Icon iconTitle={iconTitle} color={"white"} size={27} />
        <p>{name}</p>
      </Link>
    </StyledItemSide>
  );
};

export default ItemMain;
