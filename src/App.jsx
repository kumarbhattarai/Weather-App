
import Input from './components/input.jsx'
import Card from './components/card.jsx'
import { UseWeather } from './context/Weather.jsx'
import GetLocation from './api/GetLocation.jsx'
function App() {
  const { weather} = UseWeather();
  console.log(weather);
  return (
    
      <div className="min-h-screen w-full bg-gradient-to-br from-sky-900 via-sky-800 to-sky-700 flex flex-col items-center justify-start py-10 px-5 text-white ">
      <h1 className="text-5xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
        Weather App
      </h1>

      <div>
        <GetLocation />
      </div>

      <div >
        <Input />
      </div>

      <Card />
    </div>
  )
}

export default App
