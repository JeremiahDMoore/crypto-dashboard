import React from 'react';

import { useState } from "react"
import axios from "axios"
import ExchangeRate from "./ExchangeRate"

require('dotenv').config()

const CurrencyConverter = () => {
    const currencies = ['BTC', 'ETH', 'MANA', 'ALGO', 'SAND', 'FTT', 'SOL', 'USDC']
    const currencies_two = ['USD', 'EUR', 'BTC', 'ETH', 'MANA', 'ALGO', 'SAND', 'FTT', 'SOL']
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('USD')
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
                'x-rapidapi-key': process.env.REACT_APP_CURRENCY_CONVERTER_KEY
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
      <div className="currency-converter">
        <h2>Crypto Converter</h2>
        <div className="input-box">          
        <table>
            <tbody>
                <tr>
                    <td>From:</td>                    
                    <td>
                        <select
                            value={chosenPrimaryCurrency}
                            name="currency-option-1"
                            className="currency-options"
                            onChange={(e) => setChosenPrimaryCurrency(e.target.value)}                                                      
                        
                        >  
                         {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}

                        </select>
                    </td>
                    <td>
                        <input
                            type="number"
                            name="currency-amount-1"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </td>
                </tr>
                <tr>
                    <td>To:</td>
                    <td>
                        <select
                            value={chosenSecondaryCurrency}
                            name="currency-option-2"
                            className="currency-options"
                            onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                                                          
                        
                        >
                            {currencies_two.map((currency, _index) => (<option key={_index}>{currency}</option>))}

                        </select>
                    </td>
                    <td>
                        <input
                            
                            name="currency-amount-2"
                            value={result}
                            disabled={true}
                        />
                    </td>
                    
                </tr>
            </tbody>
        </table>
        <br></br>
        <button className="convert-button" onClick={convert}>Convert</button>
        
        </div>
        <br></br>
        <ExchangeRate
            exchangeRate={exchangeRate}            
            chosenPrimaryCurrency={chosenPrimaryCurrency}
            chosenSecondaryCurrency={chosenSecondaryCurrency}
        
        />
      </div>
    )
  }
  
  export default CurrencyConverter
  