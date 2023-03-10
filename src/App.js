import { useState } from "react";
import styled from "styled-components";
import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import ForeCast from "./components/Forecast/Forecast";
import LocalWeather from "./components/LocalWeather/LocalWeather";
import OtherCities from "./components/OtherCities/OtherCities";
import wrapperBg from "./assets/images/wrapperBgImg.jpg";

const Wrapper = styled(BackgroundImage)`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: white;
  border-radius: 32px;
  box-shadow: 0 0 16px rgb(0 0 0 / 50%);
  overflow: auto;
`;

const Layout = styled.div`
  display: flex;
  padding: 36px 0;
`;

const VerticalDivider = styled.div`
  width: 3px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const App = () => {
  const [cityId, setCityId] = useState(2158177);

  return (
    <Wrapper src={wrapperBg}>
      <Container>
        <LocalWeather cityId={cityId} />
        <Layout>
          <OtherCities currentCityId={cityId} setCurrentCityId={setCityId} />
          <VerticalDivider />
          <ForeCast cityId={cityId} />
        </Layout>
      </Container>
    </Wrapper>
  );
};

export default App;
