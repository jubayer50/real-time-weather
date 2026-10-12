import Header from "./Components/Header/Header";
import WeatherBoard from "./Components/WeatherBoard/WeatherBoard";
import { WeatherProvider } from "./Provider";

const App = () => {
  return (
    <WeatherProvider>
      <div className="bg-body font-[Roboto] text-light bg-[url('/src/assets/body-bg.png')] bg-no-repeat bg-cover h-screen grid place-items-center">
        <Header />

        <main>
          <WeatherBoard />
        </main>
      </div>
    </WeatherProvider>
  );
};

export default App;
