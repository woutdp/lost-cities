// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true

import type { PageLoad } from './$types'

export const load: PageLoad = async ({ url }) => {
  const player1 = (url.searchParams.get('p1') || '').split(',')
  const player2 = (url.searchParams.get('p2') || '').split(',')
  // console.log(player1)
  // console.log(player2)
  // console.log(url.searchParams.get("p1").split(','))
  // console.log(url.searchParams.get("p2").split(','))
  // console.log(url.searchParams.get("p3").split(','))
  return {
    // serverMessage: data.serverMessage,
    // universalMessage: 'hello from universal load function',
  }
}
