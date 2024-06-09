<script lang="ts">
  import Handshake from './Handshake.svelte'
  import { uncheck } from './+page.svelte'
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

  $: result = (checked && card) || null
  $: if ($uncheck) {
    console.log($uncheck)
    checked = false
  }
</script>

<input id={identifier} name={identifier} type="checkbox" class="group peer hidden" bind:checked />
<label
  for={identifier}
  class={`${checked ? `bg-${color}-500 border-${color}-400 text-brown` : `text-${color}-700 peer-hover:bg-${color} border-${color}-700 `} flex h-full w-full cursor-pointer items-center justify-center rounded border text-4xl transition duration-200 sm:aspect-[2/3] sm:max-w-16`}
>
  {#if value === 0}
    <Handshake />
  {:else}
    {value}
  {/if}
</label>
