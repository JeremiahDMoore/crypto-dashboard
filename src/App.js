
import NewsFeed from "./components/NewsFeed"
import CurrencyConverter from './components/CurrencyConverter';
import Resources from "./components/Resources";

const nutrag = "No FOMO, No YOLO, No Yeets on shitcoins .. DYOR !!!"

const App = () => {

  return (
    <div className="app">
      <div class="ticker-wrap">
        <div class="ticker">
          <div class="ticker__item">{nutrag}</div>
          
        </div>
      </div>
      <NewsFeed />
      <CurrencyConverter />
      <Resources />
      
    </div>
  )
}

export default App
