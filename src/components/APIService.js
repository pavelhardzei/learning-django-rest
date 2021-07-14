export default class APIService {
    static UpdateArticle(article_id, body) {
        return fetch(`http://localhost:8000/articles/${article_id}/`,
            {
                "method": "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            }).then(resp => resp.json())
    }
}