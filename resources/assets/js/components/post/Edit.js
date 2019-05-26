import React, { Component } from 'react';
import axios from 'axios';
import SuccessAlert from './SuccessAlert';
import ErrorAlert from './ErrorAlert';

export default class Edit extends Component {

    constructor(props) {
        super();
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            title: '',
            description: '',
            alert_message: ''
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/post/edit/' + this.props.match.params.id)
            .then(response => {
                this.setState({ title: response.data.title });
                this.setState({ description: response.data.description });
            });
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const post = {
            title: this.state.title,
            description: this.state.description
        }

        axios.put('http://127.0.0.1:8000/api/post/update/' + this.props.match.params.id, post)
            .then(res => {
                this.setState({ alert_message: "success" })
            }).catch(error => {
                this.setState({ alert_message: "error" });
            })
    }

    render() {
        return (
            <div>
                <hr />

                {this.state.alert_message == "success" ? <SuccessAlert message={"Post updated successfully."} /> : null}
                {this.state.alert_message == "error" ? <ErrorAlert message={"Error occured while updating the post."} /> : null}

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text"
                            className="form-control"
                            id="title"
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                            placeholder="Enter title" />
                    </div>



                    <div className="form-group">
                        <label htmlFor="title">Description</label>
                        <textarea className="form-control"
                            id="description"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            placeholder="Enter Dscription">
                        </textarea>

                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
