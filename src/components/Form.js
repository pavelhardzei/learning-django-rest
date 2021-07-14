import React from 'react';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: ""
        }
    }

    render() {
        return (
            <div>
                {this.props.article ? (
                    <div className="mb-3">
                        <label htmlFor="title">Title</label><br/>
                        <input type="text" className="form-label" id="title" placeholder="Enter the title"
                               value={this.props.article.title} onChange={e => this.setState({title: e.target.value})}/><br/>

                        <label htmlFor="description">Description</label>
                        <textarea className="form-control" id="description" rows="5" placeholder="Enter the description"
                                  value={this.props.article.description} onChange={e => this.setState({description: e.target.value})}/>
                        <button className="btn btn-success mt-2">Update article</button>
                    </div>
                ): null}
            </div>
        )
    }
}

export default Form;