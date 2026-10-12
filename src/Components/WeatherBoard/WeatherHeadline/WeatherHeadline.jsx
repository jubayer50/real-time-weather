import cloudIcon from "../../../assets/cloud.svg";
import hazeIcon from "../../../assets/haze.svg";
import sunIcon from "../../../assets/sun.svg";
import rainIcon from "../../../assets/rainy.svg";
import thunderIcon from "../../../assets/thunder.svg";

import { useContext } from "react";
import pin from "../../../assets/pin.svg";
import { WeatherContext } from "../../../Context";
import { getFormateData } from "../../../utils/data_formate";

const WeatherHeadline = () => {
  const { weatherData } = useContext(WeatherContext);

  const { location, climate, temperature, time } = weatherData;

  const getClimateIcon = (climate) => {
    switch (climate) {
      case "Rain":
        return rainIcon;

      case "Clouds":
        return cloudIcon;

      case "Clear":
        return sunIcon;

      case "Snow":
        return cloudIcon;

      case "Thunder":
        return thunderIcon;

      case "Fog":
        return hazeIcon;

      case "Haze":
        return hazeIcon;

      case "Mist":
        return hazeIcon;

      default:
        return sunIcon;
    }
  };

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getClimateIcon(climate)} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>

          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pin} alt="location" />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormateData(time, "time", false)} -{" "}
        {getFormateData(time, "date", false)}
      </p>
    </div>
  );
};

export default WeatherHeadline;
