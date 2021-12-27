
import { useState } from "react"
import axios from "axios"
import ExchangeRate from "./ExchangeRate"

const CurrencyConverter = () => {
    const currencies = ['BTC', 'ETH', 'MANA', 'ALGO', 'SAND', 'FTT', 'SOL', 'USDC']
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC')
    const [amount, setAmount] = useState(1)
    const [exchangeRate, setExchangeRate] = useState(0)
    const [result, setResult] = useState(0)

    console.log(chosenPrimaryCurrency, chosenSecondaryCurrency, amount)
    const convert = () => {
        const options = {
            method: 'GET',
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: {from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency},
            headers: {
                'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
                'x-rapidapi-key': '969c3e8ec3mshb1cce8f14d813cbp192f32jsnf36121c3f2dc'
            }
        }

        axios.request(options).then((response) =>{
	        console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
            setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
            setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount)
        }).catch((error) => {
        	console.error(error)
        })
    }

    console.log(exchangeRate)

    return (
      <div className="">
        <h2>Ticker</h2>
       </div>
  
    )
  }
  
  export default CurrencyConverter
  