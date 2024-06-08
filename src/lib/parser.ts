import { isHandshake, isCard } from '$lib/cards'

export function parseQueryParams(params: URLSearchParams) {
  const player1 = parsePlayer(params.get('p1') || '')
  const player2 = parsePlayer(params.get('p2') || '')

  return { player1, player2 }
}

function parsePlayer(playerString: string): string[] {
  return playerString
    .replace(/ /g, '')
    .toLowerCase()
    .split(',')
    .filter(Boolean)
    .filter((card) => isCard(card))
    .sort()
    .reduce((l: string[], card) => {
      const last = l[l.length - 1]
      const last3 = l.slice(-3)
      if (isHandshake(card))
        return last3.length === 3 && last3.every((c) => c === card) ? l : [...l, card]
      else return last === card ? l : [...l, card]
    }, [])
}

export function validate(players: { player1: string[]; player2: string[] }) {
  const frequencies = [...players.player1, ...players.player2].reduce(
    (table, card) => {
      table[card] = (table[card] || 0) + 1
      return table
    },
    {} as Record<string, number>
  )

  for (let card in frequencies) {
    let count = frequencies[card]
    if (isHandshake(card) && count > 3) return false
    else if (!isHandshake(card) && count > 1) return false
  }

  return true
}
