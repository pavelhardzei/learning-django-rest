import React from 'react';
import APIService from "./APIService";

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.article.title,
            description: this.props.article.description
        }
    }

    updateArticle = () => {
        let title = this.state.title
        let description = this.state.description
        APIService.UpdateArticle(this.props.article.id, {title, description})
            .then(resp => this.props.updatedInformation(resp))
    }

    render() {

        return (
            <div>
                {this.props.article ? (
                    <div className="mb-3">
                        <label htmlFor="title">Title</label><br/>
                        <input type="text" className="form-label" id="title" placeholder="Enter the title"
                               value={this.state.title} onChange={e => this.setState({title: e.target.value})}/><br/>

                        <label htmlFor="description">Description</label>
                        <textarea className="form-control" id="description" rows="5" placeholder="Enter the description"
                                  value={this.state.description} onChange={e => this.setState({description: e.target.value})}/>
                        <button onClick={this.updateArticle} className="btn btn-success mt-2">Update article</button>
                    </div>
                ): null}
            </div>
        )
    }
}

export default Form;