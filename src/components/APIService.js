export default class APIService {
    static UpdateArticle(article_id, body) {
        return fetch(`http://localhost:8000/articles/${article_id}/`,
            {
                "method": "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Token 46cd8a8707b84bc33595cb202bb036cdca27858c'//
                },
                body: JSON.stringify(body)
            }).then(resp => resp.json())
    }

    static LoginUser(body) {
        return fetch(`http://localhost:8000/api-auth/login/`,
            {
                "method": "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            }).then(resp => resp.json())
    }
}