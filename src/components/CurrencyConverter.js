import React from 'react';
import { useState, useEffect } from "react"
import axios from "axios"
import ExchangeRate from "./ExchangeRate"

require('dotenv').config() 

const CurrencyConverter = () => {
    const [cryptoList, setCryptoList] = useState([]); 
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC') 
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('USD')
    const [amount, setAmount] = useState(1);
    const [exchangeRate, setExchangeRate] = useState(0);
    const [result, setResult] = useState(0);
    const [currentPrice, setCurrentPrice] = useState(0);
    const [marketCap, setMarketCap] = useState(0); 
    const [tradingVolume, setTradingVolume] = useState(0);

    useEffect(() => {
        const fetchCryptoSymbols = async () => {
            const options = {
                method: 'GET',
                url: 'https://alpha-vantage.p.rapidapi.com/query',
                params: {
                    keywords: 'crypto', 
                    function: 'SYMBOL_SEARCH' 
                },
                headers: {
                    'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
                    'x-rapidapi-key': process.env.REACT_APP_CURRENCY_CONVERTER_KEY
                }
            };

            try {
                const response = await axios.request(options);
                const cryptoData = response.data['bestMatches'];

                setCryptoList(cryptoData.map(item => ({ 
                    symbol: item['1. symbol'], 
                    name: item['2. name'] 
                }))); 
            } catch (error) {
                console.error("Error fetching symbols:", error);
            }
        };

        const fetchCryptoData = async (symbol) => {
            const options = {
                method: 'GET',
                url: 'https://alpha-vantage.p.rapidapi.com/query',
                params: { 
                    symbol: symbol,
                    market: 'USD', 
                    function: 'DIGITAL_CURRENCY_DAILY' 
                },
                headers: {
                    'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
                    'x-rapidapi-key': process.env.REACT_APP_CURRENCY_CONVERTER_KEY
                }
            };

            try {
                const response = await axios.request(options);
                const timeSeries = response.data['Time Series (Digital Currency Daily)'];
                const latestData = timeSeries[Object.keys(timeSeries)[0]]; 

                setCurrentPrice(latestData['4a. close (USD)']); 
                setMarketCap(latestData['market_cap (USD)']); // Placeholder - update with the correct key
                setTradingVolume(latestData['volume']); // Placeholder - update with the correct key
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchCryptoSymbols();
        fetchCryptoData(chosenPrimaryCurrency); 
    }, []); 

    const convert = () => {
        const options = {
            method: 'GET',
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: { 
                from_currency: chosenPrimaryCurrency, 
                function: 'CURRENCY_EXCHANGE_RATE', 
                to_currency: chosenSecondaryCurrency
            },
            headers: {
                'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_CURRENCY_CONVERTER_KEY
            }
        };

        axios.request(options).then((response) =>{
            setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
            setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount);
        }).catch((error) => {
            console.error(error)
        })
    };

    // ... Your JSX for rendering the component ...


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
  
