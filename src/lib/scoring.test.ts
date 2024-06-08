import { it, describe } from 'vitest'
import { score } from '$lib/scoring'

describe.concurrent('score', () => {
  it('empty', async ({ expect }) => {
    const s = score({ player1: [], player2: [] })
    expect(s.player1.score).toBe(0)
  })

  it('simple player 1', async ({ expect }) => {
    const s = score({ player1: ['b2', 'b3', 'b9', 'b10'], player2: [] })
    expect(s.player1.score).toBe(2 + 3 + 9 + 10 - 20)
  })

  it('simple player 1 with handshake', async ({ expect }) => {
    const s = score({ player1: ['b0', 'b2', 'b3', 'b9', 'b10'], player2: [] })
    expect(s.player1.score).toBe((2 + 3 + 9 + 10 - 20) * 2)
  })

  it('simple player 1 with handshakes', async ({ expect }) => {
    const s = score({ player1: ['b0', 'b0', 'b2', 'b3', 'b9', 'b10'], player2: [] })
    expect(s.player1.score).toBe((2 + 3 + 9 + 10 - 20) * 3)
  })

  it('complex player 1', async ({ expect }) => {
    // prettier-ignore
    const player1 = [
      'y0', 'y4', 'y7', 'y9',
      'b0', 'b0', 'b2', 'b3', 'b9', 'b10',
      'g0', 'g4', 'g7',
      'r0', 'r0', 'r2', 'r3', 'r9', 'r10', 'r5', 'r8',
    ]
    const s = score({ player1, player2: [] })
    expect(s.player1.score).toBe(65)
  })
})
