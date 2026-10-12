import logoWeather from "../../../assets/logo.svg";

const Logo = () => {
  return (
    <a href="/">
      <img className="h-9" src={logoWeather} alt="Weather App" />
    </a>
  );
};

export default Logo;
