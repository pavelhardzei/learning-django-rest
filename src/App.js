import './App.css';
import {useState, useEffect} from "react";
import {ArticleList} from "./components/ArticleList";
import Form from "./components/Form";

function App() {

    const [articles, setArticles] = useState([])
    const [editArticle, setEditArticle] = useState(null)

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

    const editBtn = (article) => {
        setEditArticle(article)
    }

    const updatedInformation = (updated) => {
        const new_articles = articles.map(article => {
            if (updated.id === article.id)
                return updated
            else
                return article
        })

        setArticles(new_articles)
    }

    return (
        <div className="App">
            <h1>React and Django</h1>
            <ArticleList articles={articles} editBtn={editBtn}/>
            {editArticle ? <Form article={editArticle} updatedInformation={updatedInformation}/> : null}
        </div>
    );
}

export default App;
