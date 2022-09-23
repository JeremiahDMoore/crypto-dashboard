import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

require('dotenv').config()
// gets data from newsfeed api
const NewsFeed = () => {
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        
      const options = {
        method: 'GET',
        url: 'https://crypto-news-live3.p.rapidapi.com/news',
        headers: {
          'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.REACT_APP_NEWS_FEED_KEY
        }
      };

axios.request(options).then((response) => {
	console.log(response.data)
    setArticles(response.data)
}).catch((error) => {
	console.error(error)
});
    }, [])
    const first7Articles = articles ? articles.slice(10, 35) : null;
    // added target="_blank" to open links in new tab
    return (
      <div className="news-feed">
        <h2>Today's Top 25</h2>
        <div className="news-feed-elements">        
        {first7Articles?.map((article, _index) => (
        <div key={_index}  > 
            <a href={article.url} target="_blank" rel="noreferrer"><p>{_index + 1}. {article.title}<br></br>{article.date}</p></a>
        </div>))}
        </div>
      </div>
    )
  }
  
  export default NewsFeed
  