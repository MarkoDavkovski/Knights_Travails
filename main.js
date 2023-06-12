let board = [];

const CreateBoard = (() => {
	for (let i = 0; i < 8; i++) {
		board[i] = [];
		for (let j = 0; j < 8; j++) {
			board[i][j] = `[${i}][${j}]`;
		}
	}
})();

const possibleMoves = ([x, y]) => {};

const findShortestPath = (start, end) => {};

const knightMoves = (start, end) => {};
