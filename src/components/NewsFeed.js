import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
const NewsFeed = () => {
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        
      const options = {
        method: 'GET',
        url: 'https://crypto-news-live3.p.rapidapi.com/news',
        headers: {
          'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com',
          'X-RapidAPI-Key': '14e6db2ea2mshd3417466d04fac6p1ac271jsnc70a82dde267'
        }
      };

axios.request(options).then((response) => {
	console.log(response.data)
    setArticles(response.data)
}).catch((error) => {
	console.error(error)
});
    }, [])
    const first7Articles = articles ? articles.slice(10, 17) : null;

    return (
      <div className="news-feed">
        
        <h2>Top Stories</h2>
        {first7Articles?.map((article, _index) => (
        <div key={_index}  >
            <a href={article.url}><p>{article.title}<br></br>{article.date}</p></a>
        </div>))}

      </div>
    )
  }
  
  export default NewsFeed
  