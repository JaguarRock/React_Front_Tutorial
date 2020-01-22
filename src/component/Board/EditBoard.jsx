import React, { Component } from 'react';
import BoardService from "../../service/BoardService";

class EditBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : '',
            title : '',
            content : '',
        }
        this.saveBoard = this.saveBoard.bind(this);
        this.loadBoard = this.loadBoard.bind(this);
    }

    componentDidMount() {
        this.loadBoard();
    }

    loadBoard() {
        BoardService.fetchBoardById(window.localStorage.getItem("id"))
            .then((res) => {
                let Board = res.data.result;
                this.setState({
                    id : Board.id,
                    title : Board.title,
                    content : Board.content
                })
            });
    }

    onChange = (e) => 
        this.setState({ [e.target.name] : e.target.value });
    

    saveBoard = (e) => {
        e.preventDefault();
        let Board = { id: this.state.id, title: this.state.title, content: this.state.content};
        BoardService.editBoard(Board)
            .then(res => {
                this.props.history.push('/boards');
            });
    }

    render() {
        return (
            <div>
                <h2>Edit Board</h2>
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
                    <button className="btn btn-success" onClick={this.saveBoard}>Edit</button>
                </form>
            </div>
        )
    }
}

export default EditBoard;