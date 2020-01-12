import styled from "styled-components";

const StyledHero = styled.header`
  min-height: calc(66vh);
  background: url(${props => props.img});
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;
