import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
const NewsFeed = () => {
    const [articles, setArticles] = useState(null);


    useEffect(() => {
        
const options = {
  method: 'GET',
  url: 'https://crypto-news-live.p.rapidapi.com/news',
  headers: {
    'x-rapidapi-host': 'crypto-news-live.p.rapidapi.com',
    'x-rapidapi-key': '969c3e8ec3mshb1cce8f14d813cbp192f32jsnf36121c3f2dc'
  }
}

axios.request(options).then((response) => {
	console.log(response.data)
    setArticles(response.data)
}).catch((error) => {
	console.error(error)
});
    }, [])
    const first7Articles = articles ? articles.slice(62, 69) : null;

    return (
      <div className="news-feed">
        
        <h2>Top Stories</h2>
        {first7Articles?.map((article, _index) => (
        <div key={_index}>
            <a href={article.url}><p>{article.title}<br></br>{article.date}</p></a>
        </div>))}

      </div>
    )
  }
  
  export default NewsFeed
  