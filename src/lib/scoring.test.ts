import { it, describe } from 'vitest'
import { score } from '$lib/scoring'

describe.concurrent('score', () => {
  it('empty', async ({ expect }) => {
    const s = score({ player1: [], player2: [] })
    expect(s.player1.total).toBe(0)
  })

  it('simple player 1', async ({ expect }) => {
    const s = score({ player1: ['b2', 'b3', 'b9', 'b10'], player2: [] })
    expect(s.player1.total).toBe(2 + 3 + 9 + 10 - 20)
  })
})
