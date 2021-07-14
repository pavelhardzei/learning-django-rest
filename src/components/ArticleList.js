import React from 'react';

export const ArticleList = (props) => {
    return (
        <div>
            {props.articles && props.articles.map(article => {
                return (
                    <div key={props.articles.indexOf(article)}>
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <hr/>
                    </div>
                )
            })}
        </div>
    );
};