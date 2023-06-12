let board = [];

const CreateBoard = (() => {
	for (let i = 0; i < 8; i++) {
		board[i] = [];
		for (let j = 0; j < 8; j++) {
			board[i][j] = `[${i}][${j}]`;
		}
	}
})();

const possibleMoves = ([x, y]) => {
	const moves = [
		[1, 2],
		[1, -2],
		[-1, 2],
		[-1, -2],
		[2, 1],
		[2, -1],
		[-2, 1],
		[-2, -1],
	];
	const validMoves = [];
	for (let move of moves) {
		const newX = x + move[0];
		const newY = y + move[1];
		if (newX >= 0 && newX <= 7 && newY >= 0 && newY <= 7) {
			validMoves.push([newX, newY]);
		}
		return validMoves;
	}
};

const findShortestPath = (start, end) => {};

const knightMoves = (start, end) => {};
