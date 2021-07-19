import React, {useState, useEffect} from 'react';
import APIService from "./APIService";
import {useCookies} from "react-cookie";

function Form(props) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [token] = useCookies(['my_token'])

    useEffect(() => {
        setTitle(props.article.title)
        setDescription(props.article.description)
    }, [props.article])

    const updateArticle = () => {
        APIService.UpdateArticle(props.article.id, {title, description}, token['my_token'])
            .then(resp => props.updatedInformation(resp))
    }

    const insertArticle = () => {
        APIService.InsertArticle({title, description}, token['my_token'])
            .then(resp => props.insertedInformation(resp))
    }

    return (
        <div>
            {props.article ? (
                <div className="mb-3">
                    <label htmlFor="title">Title</label><br/>
                    <input type="text" className="form-label" id="title" placeholder="Enter the title"
                           value={title} onChange={e => setTitle(e.target.value)}/><br/>

                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" rows="5" placeholder="Enter the description"
                              value={description} onChange={e => setDescription(e.target.value)}/>
                    {
                        props.article.id ? <button onClick={updateArticle} className="btn btn-success mt-2">
                            Update article</button> :
                            <button onClick={insertArticle} className="btn btn-success mt-2">Insert article</button>
                    }
                </div>
            ): null}
        </div>
    )
}

export default Form;