<script lang="ts">
  import Handshake from './Handshake.svelte'
  import { hasCard } from '$lib/store'
  import { colorValueToCard } from '$lib/cards'

  export let color: string
  export let value: number = 0
  export let player: number = 0
  export let id: number = 0
  export let result: string | null

  $: card = colorValueToCard(color, value)
  $: checked = hasCard(player, card)
  $: result = (checked && card) || null
  $: identifier = `${id}:${player}-${color}-${value}`

  export let checked: boolean
  export let score: number
</script>

<input id={identifier} name={identifier} type="checkbox" class="hidden peer" bind:checked />
<label
  for={identifier}
  class={`
    ${checked ? `bg-${color} text-brown` : `text-${color} hover:bg-${color} hover:bg-opacity-10`}
    border-2 border-${color} rounded aspect-[2/3] min-w-16 cursor-pointer flex justify-center items-center text-3xl transition duration-75
  `}
>
  {#if value === 0}
    <Handshake />
  {:else}
    {value}
  {/if}
</label>
