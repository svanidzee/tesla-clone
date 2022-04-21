import React from "react";
import styled from "styled-components";

import Section from "./section";
import { data } from "./data/home-data";

const Home = () => {
  return (
    <Container>
      {data.map((section) => (
        <Section
          title={section.title}
          description={section.description}
          backgroundImg={section.backgroundImg}
          leftBtnText={section.leftBtnText}
          rightBtnText={section.rightBtnText}
        />
      ))}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
