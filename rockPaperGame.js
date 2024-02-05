const moves = ["Rock", "Paper", "Scissor"];
const player = Math.floor(Math.random() * moves.length);
const computer = Math.floor(Math.random() * moves.length);
let result =
    player === computer
        ? "Tie"
        : (player === 0 && computer === 1)
            ? "Computer won"
            : (player === 0 && computer === 2)
                ? "Player won"
                : (player === 1 && computer === 0)
                    ? "Player won"
                    : (player === 1 && computer === 2)
                        ? "Player won"
                        : (player === 2 && computer === 0)
                            ? "Computer won"
                            : (player === 2 && computer === 1)
                                ? "Computer won"
                                : "Invalid move";

console.log(`Player: ${moves[player]}, Computer: ${moves[computer]}, Result: ${result}`);
