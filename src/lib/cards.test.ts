import { expect, it } from 'vitest'
import { getValue, getColor } from '$lib/cards'

it('getValue', () => {
  expect(getValue('b2')).toBe(2)
  expect(getValue('b0')).toBe(0)
  expect(getValue('b10')).toBe(10)
  expect(getValue('b9')).toBe(9)
})

it('getColor', () => {
  expect(getColor('b2')).toBe('b')
  expect(getColor('r0')).toBe('r')
  expect(getColor('y10')).toBe('y')
  expect(getColor('p9')).toBe('p')
})
