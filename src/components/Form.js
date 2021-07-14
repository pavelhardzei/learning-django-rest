import React from 'react';

export const Form = (props) => {
    return (
        <div>
            {props.article ? (
                <div className="mb-3">
                    <label htmlFor="title">Title</label><br/>
                    <input type="text" className="form-label" id="title" placeholder="Enter the title"/><br/>

                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" rows="5" placeholder="Enter the description"/>
                    <button className="btn btn-success mt-2">Update article</button>
                </div>
            ): null}
        </div>
    );
};