import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.div`
  margin-bottom: 0.75rem;
`;

const WeatherItem = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

export default WeatherItem;
