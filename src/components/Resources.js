import React from 'react';

const Resources = () => {

    return (
      <div className="resources-area">  
         
        Resource Links:
        <div className="res-area">
            <a href="https://messari.io/" rel = "noreferrer" target = "_blank">
              <h3>Messari - charts, technical analysis, news</h3></a>
            <a href="https://www.coingecko.com/en" rel = "noreferrer" target = "_blank"><h3>CoinGecko - current values, market cap ranking and portfolio</h3></a>
            <a href="https://coinmarketcap.com/" rel = "noreferrer" target = "_blank"><h3>CoinMarketCap - charts, current values, market cap ranking</h3></a>
            <a href="https://coinmarketcal.com/en/" rel = "noreferrer" target = "_blank"><h3>CoinmarketCAL - calendar of crypto events</h3></a>            
            <a href="https://www.coinbase.com/ventures" rel = "noreferrer" target = "_blank"><h3>Coinbase Ventures - what Coinbase is investing in</h3></a>
            {/* <a href="https://trezor.io/" rel = "noreferrer" target = "_blank"><h3>Trezor</h3></a> */}
        </div>        
      </div>
    )
  }  
  export default Resources 