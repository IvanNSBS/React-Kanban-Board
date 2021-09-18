const baseUrl = 'http://localhost:8000/';

const UrlManager = {
    user: baseUrl,
    home: baseUrl,
    folders: baseUrl+'folders',
    boards: baseUrl+'boards',
    starredBoards: baseUrl+'favorites',

    postBoardList: baseUrl+'board/list',
    postBoardCard: baseUrl+'board/list/card',
    putBoardTitle: baseUrl+'board/name',
    putBoardCardTitle: baseUrl+'board/list/name'
}

export default UrlManager;