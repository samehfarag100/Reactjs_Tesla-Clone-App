import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
const SectionComponents = ({
  title,
  description,
  backgroundImg,
  leftButton,
  rightButton,
}) => {
  return (
    <Wrap backgroundImg={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>

      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftButton}</LeftButton>
            {rightButton && <RightButton>{rightButton}</RightButton>}
          </ButtonGroup>
        </Fade>

        <DownArrow src={"/images/down-arrow.svg"} />
      </Buttons>
    </Wrap>
  );
};

export default SectionComponents;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url('/images/${props.backgroundImg}')`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  column-gap: 1rem;
  margin-bottom: 1.5rem;
  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 1.5rem;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  width: 256px;
  height: 40px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  margin-top: 20px;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
