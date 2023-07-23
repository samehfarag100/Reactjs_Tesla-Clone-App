import React from "react";
import styled from "styled-components";
import SectionComponents from "../section/SectionComponents";
const HomeComponents = () => {
  return (
    <Container>
      <SectionComponents
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <SectionComponents
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <SectionComponents
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />
      <SectionComponents
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
      />

      <SectionComponents
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftButton="Order now"
        rightButton="Learn more"
      />

      <SectionComponents
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftButton="Order now"
        rightButton="Learn more"
      />

      <SectionComponents
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftButton="Shop now"
      />
    </Container>
  );
};

export default HomeComponents;

const Container = styled.div`
  height: 100vh;
  z-index: 10;

`;
