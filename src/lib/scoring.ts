import { getValue, getColor } from './cards'

interface Expeditions {
  b?: string[]
  g?: string[]
  p?: string[]
  r?: string[]
  w?: string[]
  y?: string[]
}

interface PlayerScore {
  score: number
  expeditions: Expeditions
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
  const expeditions = extractExpeditions(cards)
  const expeditionScores = Object.entries(expeditions).map(([color, expedition]) =>
    scoreExpedition(expedition)
  )

  return {
    score: sum(expeditionScores),
    // expeditions: expeditionScores
  }
}

function scoreExpedition(expedition: string[]) {
  const values = expedition.map((card) => getValue(card))
  const s = sum(values)
  const cardCount = values.length
  const handshakes = values.filter((v) => v === 0).length

  let score = (s - 20) * (handshakes + 1)
  if (cardCount >= 8) score += 20
  return score
}

function extractExpeditions(cards: string[]): Expeditions {
  return Object.groupBy(cards, (card) => getColor(card))
}

const sum = (values: number[]) => values.reduce((a, b) => a + b, 0)
