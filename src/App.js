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

    const articleForm = () => {
        setEditArticle({title: '', description: ''})
    }

    const insertedInformation = (article) => {
        const new_articles = [...articles, article]
        setArticles(new_articles)
    }

    return (
        <div className="App">
            <div className="row">
                <div className="col">
                    <h1>React and Django</h1>
                </div>
                <div className="col">
                    <button onClick={articleForm} className="btn btn-primary">Insert Article</button>
                </div>
            </div>
            <ArticleList articles={articles} editBtn={editBtn}/>
            {editArticle ? <Form article={editArticle} updatedInformation={updatedInformation}
                                 insertedInformation={insertedInformation}/> : null}
        </div>
    );
}

export default App;
