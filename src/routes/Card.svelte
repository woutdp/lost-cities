<script lang="ts">
  import Handshake from './Handshake.svelte'
  // import { onDestroy } from 'svelte'
  import { get } from 'svelte/store'
  import { cards } from '$lib/store'
  import { colorValueToCard } from '$lib/cards'
  import { browser } from '$app/environment'

  export let color: string
  export let value: number = 0
  export let player: string
  export let id: number
  export let result: string | null
  export let checked: boolean

  const card = colorValueToCard(color, value)
  const identifier = `${id}:${player}-${color}-${value}`

  if (id) {
    let handshakeCount = $cards[player].filter((v) => v === card).length
    if (id <= handshakeCount) checked = true
  } else checked = $cards[player].includes(card)

  // console.log(get(cards)[player].includes(card))

  // $: checked = hasCard(player, card)
  $: result = (checked && card) || null
  // $: {
  //   // if (id) {
  //   // let handshakeCount = $cards[player].filter((v) => v === card).length
  //   // if (id > handshakeCount) checked = false
  // if (!$cards[player].includes(card)) checked = false
  //   // const playerCards = $cards[player]
  //   // console.log(playerCards)
  //   // console.log(player)
  //   // if
  //   //   // (player)
  //   //   // console.log(playerCards)
  //   //
  //   //   // checked = {}
  // }

  // export function hasCard(player: number, card: string) {
  //   const cardsForPlayer = getPlayerCards(player)
  //   return cardsForPlayer.includes(card)
  // }
  //
  // function getPlayerCards(player: number): string[] {
  //   if (player == 1) return get(cards).player1
  //   if (player == 2) return get(cards).player2
  //   return []
  // }

  // const unsubscribe = cards.subscribe(cards => {
  // if (!hasCard(player, card)) checked = false
  // });
  // onDestroy(unsubscribe);
</script>

<input id={identifier} name={identifier} type="checkbox" class="group peer hidden" bind:checked />
<label
  for={identifier}
  class={`${checked ? `bg-${color}-500 border-${color}-400 text-brown` : `text-${color}-700 peer-hover:bg-${color} border-${color}-900 `} flex h-full w-full cursor-pointer items-center justify-center rounded border text-4xl transition duration-200 sm:max-w-16`}
>
  {#if value === 0}
    <Handshake />
  {:else}
    {value}
  {/if}
</label>
