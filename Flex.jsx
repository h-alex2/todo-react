import React from "react";
import styled from "styled-components"

const Container = styled.div`
  display: flex; // 기본이 row flex-direction으로 row, column
  align-items: center; // 기본값 flex-start 축과 수직
  justify-content: center; //축 가로
  height: 100vh;
`;

const Box = styled.div `
  width: 200px;
  height: 200px;
`;
const Box1 = styled(Box)`
  background: red;
  height: 100px;
`;
const Box2 = styled(Box)`
  width: 300px;
  background: black;
`;
const Box3 = styled(Box)`
  background: blue;
`;
const Box4 = styled(Box)`
  background: green;
  height: 300px;
`;

const Flex = () => {
  return (
    <Container>
      <Box1 />
      <Box2 />
      <Box3 />
      <Box4 />
      <div>why</div>
    </Container>
  )
};

export default Flex;


//flex-glow
//flex-wrap 을 부모에게 주면 자식들이 줄어들지 않고 자식들이 한칸내려간다.
// 부모에게 flex를 주면 자식요소를 조절할 수 있다.