import React, { Component } from 'react';
import BoardService from "../../service/BoardService";

class AddBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            message: null
        }
    
    }

    saveBoard = (e) => {
        e.preventDefault();
        let Board = { title : this.state.title, content: this.state.content };
        BoardService.addBoard(Board)
            .then(res => {
                this.setState({message: 'Board added Successfully'});
                this.props.history.push('/boards');
            });
    }

    onChange = (e) => 
        this.setState({ [e.target.name]: e.target.value });
    
    render() {
        return(
            <div>
                <h2 className="text-Center">Add Board</h2>
                <form>
                    <div className="form-group">
                        <label>Board title :</label>
                        <input type="text" placeholder="title" name="title" className="form-control"
                         value={this.state.title} onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                        <label>Board content :</label>
                        <input type="text" placeholder="content" name="content" className="form-control"
                         value={this.state.content} onChange={this.onChange}/>
                    </div>
                    <button className="btn btn-success" onClick={this.saveBoard}>Save</button>
                </form>
            </div>
        )
    }
}

export default AddBoard;