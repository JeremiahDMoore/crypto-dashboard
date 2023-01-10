import React from 'react';

const ExchangeRate = ({exchangeRate, chosenPrimaryCurrency, chosenSecondaryCurrency}) => {
    return (
      <div className="exchange-rate">
        <span>Exchange Rate</span>
        <h1>{exchangeRate}</h1>
        {chosenPrimaryCurrency} to {chosenSecondaryCurrency}
      </div>
    )
  }  
  export default ExchangeRate
  