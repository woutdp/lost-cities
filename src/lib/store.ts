import { writable, get } from 'svelte/store'

export const cards = writable({ player1: [], player2: [] })

export function hasCard(player: number, card: string) {
  const cardsForPlayer = getPlayerCards(player)
  return cardsForPlayer.includes(card)
}

function getPlayerCards(player: number): string[] {
  if (player == 1) return get(cards).player1
  if (player == 2) return get(cards).player2
  return []
}
