import { it, describe } from 'vitest'
import { parseQueryParams, validate } from '$lib/parser'

describe.concurrent('parseQueryParams', () => {
  it('empty', async ({ expect }) => {
    expect(parseQueryParams(new URLSearchParams(''))).toEqual({ player1: [], player2: [] })
  })

  it('player 1 only', async ({ expect }) => {
    expect(parseQueryParams(new URLSearchParams('p1=b2'))).toEqual({ player1: ['b2'], player2: [] })
  })

  it('player 1 and 2', async ({ expect }) => {
    expect(parseQueryParams(new URLSearchParams('p1=b2&p2=b4'))).toEqual({
      player1: ['b2'],
      player2: ['b4'],
    })
  })

  it('player 1 and 2 with multiple cards', async ({ expect }) => {
    const params = 'p1=b4,b2,b3&p2=p4,y2,r7'
    expect(parseQueryParams(new URLSearchParams(params))).toEqual({
      player1: ['b4', 'b2', 'b3'].sort(),
      player2: ['p4', 'y2', 'r7'].sort(),
    })
  })

  it('extra inputs are ignored', async ({ expect }) => {
    const params = 'p1=b4,b2,b10&p2=p4,y2,r7&p3=b1'
    expect(parseQueryParams(new URLSearchParams(params))).toEqual({
      player1: ['b4', 'b2', 'b10'].sort(),
      player2: ['p4', 'y2', 'r7'].sort(),
    })
  })

  it('duplicate non handshakes are removed', async ({ expect }) => {
    const params = 'p1=b2,b2,b0,b0,b2'
    expect(parseQueryParams(new URLSearchParams(params))).toEqual({
      player1: ['b2', 'b0', 'b0'].sort(),
      player2: [],
    })
  })

  it('remove too many handshakes', async ({ expect }) => {
    const params = 'p1=b0,b0,b0,b0,r0,r0,y0,y0'
    expect(parseQueryParams(new URLSearchParams(params))).toEqual({
      player1: ['b0', 'b0', 'b0', 'r0', 'r0', 'y0', 'y0'].sort(),
      player2: [],
    })
  })

  it('remove unaccepted cards', async ({ expect }) => {
    const params = 'p1=a,word,b,ReallyLong&p2=a,c,5,b3,b1'
    expect(parseQueryParams(new URLSearchParams(params))).toEqual({
      player1: [],
      player2: ['b3'],
    })
  })

  it('accept uppercase', async ({ expect }) => {
    const params = 'p1=B2,B3,B4'
    expect(parseQueryParams(new URLSearchParams(params))).toEqual({
      player1: ['b2', 'b3', 'b4'],
      player2: [],
    })
  })

  it('remove spaces', async ({ expect }) => {
    const params = 'p1=b2, b4, b6'
    expect(parseQueryParams(new URLSearchParams(params))).toEqual({
      player1: ['b2', 'b4', 'b6'],
      player2: [],
    })
  })
})

describe.concurrent('validate', () => {
  it('empty', async ({ expect }) => {
    expect(validate({ player1: [], player2: [] })).toBe(true)
  })

  it('valid simple', async ({ expect }) => {
    expect(validate({ player1: ['b0', 'b2', 'b3', 'b10'], player2: ['r5', 'r2'] })).toBe(true)
  })

  it('valid simple 2', async ({ expect }) => {
    expect(validate({ player1: ['b2', 'b0'], player2: ['y2', 'b0'] })).toBe(true)
  })

  it('invalid simple', async ({ expect }) => {
    expect(validate({ player1: ['b2'], player2: ['b2'] })).toBe(false)
  })

  it('invalid too many handshakes', async ({ expect }) => {
    expect(validate({ player1: ['b2', 'b0', 'b0'], player2: ['b2', 'b0', 'b0'] })).toBe(false)
  })
})
