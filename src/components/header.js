import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { MdOutlineMenu, MdOutlineClose, MdClose } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { tabData, menuData } from "./data/header-data";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);

  const onMenuHandler = () => {
    setBurgerStatus((prevStatus) => !prevStatus);
  };

  return (
    <Container>
      <Link to="/">
        <img src="/images/logo.svg" alt="Logo" />
      </Link>
      <Menu>
        {tabData.map(({ path, label }, i) => (
          <NavLink key={i} to={path}>
            {label}
          </NavLink>
        ))}
      </Menu>

      <RightMenu>
        <NavLink to="/">Shop</NavLink>
        <NavLink to="/">Tesla Account</NavLink>
        <CustomMenu onClick={onMenuHandler} />
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={onMenuHandler} />
        </CloseWrapper>

        {menuData.map(({ path, label }, i) => (
          <li>
            <Link key={i} to={path}>
              {label}
            </Link>
          </li>
        ))}
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-weight: 600;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  ${NavLink} {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MdMenu)`
  cursor: pointer;
  font-size: 23px;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(MdClose)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
