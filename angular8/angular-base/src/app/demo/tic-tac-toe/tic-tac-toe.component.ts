import { Component } from "@angular/core";
import ToastService from "@apcore/components/toast/toast.service";
import { Toast } from "@apcore/modal/Toast";

interface Stats {
  [key: string]: number;
}

@Component({
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: [
    './tic-tac-toe.component.scss'
  ]
})
class TicTacToe {
  private static readonly PLAYER_X = 'X';
  private static readonly PLAYER_O = 'O';
  private static readonly WINNING_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  board: string[];
  currentPlayer: string;
  gameActive: boolean = true;
  gameStats: Stats;

  constructor(private toast: ToastService) {
    this.initGame();
  }

  initGame(retainStats?: boolean) {
    this.board = new Array(9).fill('');
    this.currentPlayer = this.currentPlayer === TicTacToe.PLAYER_X ? TicTacToe.PLAYER_O : TicTacToe.PLAYER_X;
    this.gameActive = true;

    if (!retainStats) {
      this.gameStats = {[TicTacToe.PLAYER_X]: 0, [TicTacToe.PLAYER_O]: 0, tie: 0};
    }
  }

  setPiece(index) {
    this.board[index] = this.currentPlayer;
    this.gameActive = this._isGameActive();
    console.log('this.gameActive', this.gameActive);

    if (this._checkForWin()) {
      this.gameActive = false;
      this.gameStats[this.currentPlayer]++;
      this.toast.success(new Toast(`Player ${this.currentPlayer} won the round.`, true));
    } else if(this.gameActive) {
      this._toggleCurrentPlayer();
    } else {
      this.gameStats.tie++;
      this.toast.info(new Toast(`Game ended in a draw!`, true));
    }
  }

  _toggleCurrentPlayer() {
    this.currentPlayer = this.currentPlayer === TicTacToe.PLAYER_X ? TicTacToe.PLAYER_O : TicTacToe.PLAYER_X;
  }

  _checkForWin(): boolean {
    let roundWon = false;
    for (let index = 0; index < TicTacToe.WINNING_CONDITIONS.length; index++) {
      let condition = TicTacToe.WINNING_CONDITIONS[index];
      let one = this.board[condition[0]];
      let two = this.board[condition[1]];
      let three = this.board[condition[2]];

      if (!one || !two || !three) {
        continue;
      }

      if (one === two && two === three) {
        roundWon = true;
        break;
      }
    }
    return roundWon;
  }

  _isGameActive() {
    return this.board.includes('');
  }
}

export default TicTacToe;