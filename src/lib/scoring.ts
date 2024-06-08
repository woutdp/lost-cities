import { getValue, getColor } from './cards'

interface PlayerScore {
  total: number
}

interface Score {
  player1: PlayerScore
  player2: PlayerScore
}

export function score(players: { player1: string[]; player2: string[] }): Score {
  const player1 = scorePlayer(players.player1)
  const player2 = scorePlayer(players.player2)

  return {
    player1,
    player2,
  }
}

function scorePlayer(cards: string[]): PlayerScore {
  console.log(extractExpeditions(cards))

  return {
    total: 0,
  }
}

function scoreExpedition(expedition: string[]) {
  return 0
}

function extractExpeditions(cards: string[]) {
  return Object.groupBy(cards, (card) => getColor(card))
}
