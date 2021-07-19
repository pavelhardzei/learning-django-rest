import React from 'react';
import APIService from "./APIService";

export const ArticleList = (props) => {

    const editBtn = (article) => {
        props.editBtn(article)
    }

    const deleteBtn = (article) => {
        APIService.DeleteArticle(article.id)
            .then(() => props.deleteBtn(article))
    }

    return (
        <div>
            {props.articles && props.articles.map(article => {
                return (
                    <div key={article.id}>
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>

                        <div>
                            <div className="d-inline m-2">
                                <button className="btn btn-primary" onClick={() => editBtn(article)}>Update</button>
                            </div>
                            <div className="d-inline">
                                <button onClick={() => deleteBtn(article)} className="btn btn-danger">Delete</button>
                            </div>
                        </div>

                        <hr className="hrclass"/>
                    </div>
                )
            })}
        </div>
    );
};