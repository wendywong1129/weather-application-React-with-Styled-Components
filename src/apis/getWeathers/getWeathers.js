import OpenWeatherMap from "../../libs/OpenWeatherMap";

const getWeathers = (ids) =>
  OpenWeatherMap.get({
    path: "/group",
    params: {
      id: ids.join(),
    },
  });

export default getWeathers;
