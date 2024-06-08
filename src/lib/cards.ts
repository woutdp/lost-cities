export function isHandshake(card: string): boolean {
  return ['b0', 'g0', 'p0', 'r0', 'w0', 'y0'].includes(card)
}

export function isCard(card: string): boolean {
  // This is the code to generate the numbers
  // The result is the same every time so let's just keep this a static list
  // const numbers = "0,2,3,4,5,6,7,8,9,10".split(",")
  // const letters = "b,g,p,r,w,y".split(",")
  // const all = numbers.flatMap(number => letters.map(letter => `${letter}${number}`))

  // prettier-ignore
  return [
    'b0', 'g0', 'p0', 'r0', 'w0', 'y0',
    'b2', 'g2', 'p2', 'r2', 'w2', 'y2',
    'b3', 'g3', 'p3', 'r3', 'w3', 'y3',
    'b4', 'g4', 'p4', 'r4', 'w4', 'y4',
    'b5', 'g5', 'p5', 'r5', 'w5', 'y5',
    'b6', 'g6', 'p6', 'r6', 'w6', 'y6',
    'b7', 'g7', 'p7', 'r7', 'w7', 'y7',
    'b8', 'g8', 'p8', 'r8', 'w8', 'y8',
    'b9', 'g9', 'p9', 'r9', 'w9', 'y9',
    'b10', 'g10', 'p10', 'r10', 'w10', 'y10'
  ].includes(card)
}

export function getColor(card: string): string {
  return card[0]
}

export function getValue(card: string): number {
  return parseInt(card.substring(1))
}
