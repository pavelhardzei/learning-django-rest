import React, {useState, useEffect} from 'react';
import APIService from "./APIService";

function Form(props) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    useEffect(() => {
        setTitle(props.article.title)
        setDescription(props.article.description)
    }, [props.article])

    const updateArticle = () => {
        APIService.UpdateArticle(props.article.id, {title, description})
            .then(resp => props.updatedInformation(resp))
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
                    <button onClick={updateArticle} className="btn btn-success mt-2">Update article</button>
                </div>
            ): null}
        </div>
    )
}

export default Form;