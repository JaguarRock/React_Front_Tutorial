import axios from 'axios';

const BOARD_API_URL = 'http://localhost:8080/boards'

class BoardService {
    fetchBoard() {
        return axios.get(BOARD_API_URL);
    }

    fetchBoardById(id) {
        return axios.get(BOARD_API_URL + '/' + id);
    }

    deleteBoard(id) {
        return axios.delete(BOARD_API_URL + '/' + id);
    }

    addBoard(Board) {
        return axios.post(""+ BOARD_API_URL, Board);
    }

    editBoard(Board) {
        return axios.put(BOARD_API_URL + '/' + Board.id, Board);
    }
}

export default new BoardService();