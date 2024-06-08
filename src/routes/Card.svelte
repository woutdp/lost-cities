<script lang="ts">
  import Handshake from './Handshake.svelte'
  export let type: string
  export let color: string
  export let value: number = 0

  $: id = `${color}-${type}-${value}`

  let checked
</script>

<input {id} name={id} type="checkbox" class="hidden peer" bind:checked />
<label
  for={id}
  class={`
    ${checked ? `bg-${color} text-brown` : `text-${color}`}
    border-2 border-${color} rounded aspect-[2/3] min-w-16 cursor-pointer flex justify-center items-center text-3xl transition duration-75
  `}
>
  {#if type === 'number'}
    {value}
  {:else}
    <Handshake />
  {/if}
</label>
