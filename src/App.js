import './App.css';
import {useState, useEffect} from "react";
import {ArticleList} from "./components/ArticleList";

function App() {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/articles/', {
            'method': 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(resp => setArticles(resp))
            .catch(error => console.log(error))
    }, [])

  return (
    <div className="App">
      <h1>React and Django</h1>
      <ArticleList articles={articles}/>
    </div>
  );
}

export default App;
