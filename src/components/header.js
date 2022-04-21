import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import { MdMenu } from "react-icons/md";

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <img src="/images/logo.svg" alt="Logo" />
      </Link>
      <Menu>
        <NavLink to="/">Model S</NavLink>
        <NavLink to="/">Model 3</NavLink>
        <NavLink to="/">Model X</NavLink>
        <NavLink to="/">Model Y</NavLink>
      </Menu>
      <RightMenu>
        <NavLink to="/">Shop</NavLink>
        <NavLink to="/">Tesla Account</NavLink>
        <CustomMenu />
      </RightMenu>
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
