import './App.css';
import {useState, useEffect} from "react";
import {ArticleList} from "./components/ArticleList";
import Form from "./components/Form";
import {useCookies} from "react-cookie";
import {useHistory} from "react-router-dom";

function App() {

    const [articles, setArticles] = useState([])
    const [editArticle, setEditArticle] = useState(null)
    const [token, setToken, removeToken] = useCookies(['my_token'])
    let history = useHistory()

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

    useEffect(() => {
        if(!token['my_token']) {
            history.push('/')
        }
    }, [history, token])

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

    const deleteBtn = (article) => {
        const new_articles = articles.filter(my_article => {
            return my_article.id !== article.id;
        })
        setArticles(new_articles)
    }

    const logoutBtn = () => {
        removeToken(['my_token'])
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
                <div className="col">
                    <button onClick={logoutBtn} className="btn btn-primary">Logout</button>
                </div>
            </div>
            <ArticleList articles={articles} editBtn={editBtn} deleteBtn={deleteBtn}/>
            {editArticle ? <Form article={editArticle} updatedInformation={updatedInformation}
                                 insertedInformation={insertedInformation}/> : null}
        </div>
    );
}

export default App;
