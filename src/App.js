
import NewsFeed from "./components/NewsFeed"
import CurrencyConverter from './components/CurrencyConverter';
import Resources from "./components/Resources";
// marquee for ticker or reminder, quote, etc.
const marquee = "No FOMO, No YOLO, No Yeets on shitcoins .. DYOR !!!"

const App = () => {

  return (
    <div className="app">
      <div className="ticker-wrap">
        <div className="ticker">
          <div className="ticker__item">{marquee}</div>
          
        </div>
      </div>
      <NewsFeed />
      <CurrencyConverter />
      <Resources />
      
    </div>
  )
}

export default App
