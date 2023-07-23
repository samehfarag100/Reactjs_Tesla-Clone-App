import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const HeaderComponents = () => {
  const [closeBurgerMenu, setCloseBurgerMenu] = useState(false);

  const handelOpen = () => {
    setCloseBurgerMenu(true);
  };

  const handelClose = () => {
    setCloseBurgerMenu(false);
  };
  return (
    <Container>
      <div>
        <a>
          <img src="/images/logo.svg" />
        </a>
      </div>
      <Menu>
        <p>
          <a href="#">model s</a>
        </p>
        <p>
          <a href="#">model 3</a>
        </p>
        <p>
          <a href="#">model x</a>
        </p>
        <p>
          <a href="#">model y</a>
        </p>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomIcon onClick={handelOpen} />
      </RightMenu>

      <BurgerNav show={closeBurgerMenu}>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Existing Inventory</a>
        </li>

        <ClearIcon onClick={handelClose} />
      </BurgerNav>
    </Container>
  );
};

export default HeaderComponents;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  p {
    text-transform: uppercase;
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    flex-wrap: nowrap;
  }
`;

const CustomIcon = styled(MenuIcon)`
  cursor: pointer;
  @media (min-width: 769px) {
    visibility: hidden;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 2rem;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.5s ease-in-out;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
    cursor: pointer;
  }
`;

const ClearIcon = styled(CloseIcon)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;
