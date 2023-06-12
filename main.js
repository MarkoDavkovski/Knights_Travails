let board = [];

const CreateBoard = (() => {
	for (let i = 0; i < 8; i++) {
		board[i] = [];
		for (let j = 0; j < 8; j++) {
			board[i][j] = `[${i},${j}]`;
		}
	}
})();

//Check for possible moves that can be made by the knight
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
	}
	return validMoves;
};

//Algorithm for finding the shortest path between two spots in the board
const findShortestPath = (start, end) => {
	let que = [start],
		paths = new Map(),
		visited = new Map();
	paths.set(start.toString(), []);

	while (que.length > 0) {
		let curr = que.shift();
		if (curr[0] === end[0] && curr[1] === end[1])
			return paths.get(curr.toString());

		const moves = possibleMoves(curr);

		for (let move of moves) {
			const moveString = move.toString();
			if (!visited.has(moveString)) {
				que.push(move);
				visited.set(moveString, true);
				paths.set(moveString, [...paths.get(curr.toString()), move]);
			}
		}
	}
	return null;
};

const knightMoves = (start, end) => {
	if (
		start[0] < 0 ||
		start[1] < 0 ||
		start[0] > 7 ||
		start[1] > 7 ||
		end[0] < 0 ||
		end[0] > 7 ||
		end[1] < 0 ||
		end[1] > 7
	)
		return `Out of range! Positions must be between [0,0] & [7,7]`;

	if (start[0] === end[0] && start[1] === end[1])
		return `You entered same position twice`;

	const path = findShortestPath(start, end);

	if (path) {
		const moves = path.length;
		const formattedPath = path.map((pos) => `[${pos.join(',')}]`).join('\n');
		return `You made it in ${moves} moves! \n Here is your path : [${start.toString()}] \n ${formattedPath}`;
	}
};

console.log(knightMoves([3, 3], [4, 3]));
