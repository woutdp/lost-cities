import { json, error } from '@sveltejs/kit'
import { parseQueryParams, parsedToQueryParams, validate } from '$lib/parser'
import { score } from '$lib/scoring'

import type { RequestHandler } from './$types'

export const GET: RequestHandler = ({ url }) => {
  const parsed = parseQueryParams(url.searchParams)
  if (!validate(parsed))
    return error(400, { message: 'Some of the cards have been inputted twice' })
  else
    return json({
      parsedInput: parsed,
      score: score(parsed),
      url: `${url.origin}?${parsedToQueryParams(parsed)}`,
    })
}
