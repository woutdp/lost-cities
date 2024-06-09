// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true

import type { PageLoad } from './$types'
import { parseQueryParams } from '$lib/parser'

export const load: PageLoad = async ({ url }) => {
  return {
    cardState: parseQueryParams(url.searchParams),
  }
}
