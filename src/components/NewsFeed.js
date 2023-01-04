import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

require('dotenv').config()

const NewsFeed = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://crypto-news16.p.rapidapi.com/news/top/25',
      headers: {
        'X-RapidAPI-Key': '14e6db2ea2mshd3417466d04fac6p1ac271jsnc70a82dde267',
        'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      setArticles(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, []);

  const first7Articles = articles ? articles.slice(0, 24) : null;

  return (
    <div className="news-feed">
      <h2>Today's Top 25 News Stories</h2>
      
      <div className="news-feed-elements">
        {first7Articles?.map((article, _index) => (
          <div key={_index}  > 
            <a href={article.url} target="_blank" rel="noreferrer"><p>{_index + 1}. {article.title}<br></br>{article.date}</p></a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsFeed;
