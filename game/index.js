import { Map } from 'immutable'
let board = Map()

// const board = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']]

export const move = (player, arr) => {

  return {
    type: "MOVE",
    position: arr,
    player
  }
}

export default function reducer(state = { turn: 'X', board }, action) {
  // TODO
  switch (action.type) {
    case "MOVE":
      const board = state.board.setIn(action.position, action.player)
      const turn = state.turn === 'X' ? 'O' : 'X'
      return { turn, board }
    default:
      return state
  }
}
