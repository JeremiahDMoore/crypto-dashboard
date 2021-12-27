
import NewsFeed from "./components/NewsFeed"
import CurrencyConverter from './components/CurrencyConverter';
import Resources from "./components/Resources";

const nutrag = "I am worthy of great things"

const App = () => {

  return (
    <div className="app">
      <div class="ticker-wrap">
        <div class="ticker">
          <div class="ticker__item">{nutrag}.</div>
          <div class="ticker__item">this is a reminder that you do Not Sleep. You find the energy from within to finish the day</div>
          <div class="ticker__item">becoming the greatest drone pilot on the team</div>
          <div class="ticker__item">Winning a beautiful woman</div>
        </div>
      </div>
      <NewsFeed />
      <CurrencyConverter />
      <Resources />
      
    </div>
  )
}

export default App
