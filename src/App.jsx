import Header from "./Components/Header/Header";
import WeatherBoard from "./Components/WeatherBoard/WeatherBoard";

const App = () => {
  return (
    <div className="bg-body font-[Roboto] text-light bg-[url('/src/assets/body-bg.png')] bg-no-repeat bg-cover h-screen grid place-items-center">
      <Header />

      <main>
        <WeatherBoard />
      </main>
    </div>
  );
};

export default App;
