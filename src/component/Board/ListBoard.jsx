import React, { Component } from 'react';
import BoardService from "../../service/BoardService";

class ListBoard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Boards: [],
            message: null
        }
        this.deleteBoardList = this.deleteBoardList.bind(this);
        this.addBoard = this.addBoard.bind(this);
        this.editBoard = this.editBoard.bind(this);
        this.reloadBoardList =  this.reloadBoardList.bind(this);
    }

    componentDidMount() {
        this.reloadBoardList();
    }

    reloadBoardList() {
        BoardService.fetchBoard()
            .then((res) => {
                this.setState({Boards: res.data.result})
            });
    }

    deleteBoardList(id) {
        BoardService.deleteBoard(id)
            .then(res => {
                this.setState({Boards: res.data.result})
            });
    }

    editBoard(id) {
        window.localStorage.setItem("id", id);
        this.props.history.push('/edit-board');
    }

    addBoard() {
        window.localStorage.removeItem("id");
        this.props.history.push('/add-boards');
    }

    render() {
        return (
            <div className="container">
                <h3>All Board</h3>
                <button className="btn btn-danger" style={{width:'100px'}} onClick={() => this.addBoard()}>Add Board</button>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Content</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Boards.map(
                                    Board => 
                                        <tr key = {Board.id}>
                                            <td>{Board.id}</td>
                                            <td>{Board.title}</td>
                                            <td>{Board.content}</td>
                                            <td>
                                                <button className="btn btn-success" onClick={() => this.deleteBoardList(Board.id)}>Delete</button>
                                                <button className="btn btn-success" onClick={() => this.editBoard(Board.id)} style={{marginLeft: '20px'}}>Edit</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListBoard;