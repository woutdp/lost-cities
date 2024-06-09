<script lang="ts">
  import Reset from './Reset.svelte'
  import { cards } from '$lib/store'
  import { score } from '$lib/scoring'

  export let selectedPlayer = 1
  export let reset

  let options = [
    {
      id: 'player1',
      value: 1,
      label: 1,
      peer: 'peer/1',
      labelClass: 'peer-checked/1:bg-brown-500 peer-checked/1:border-brown-50',
    },
    {
      id: 'player2',
      value: 2,
      label: 2,
      peer: 'peer/2',
      labelClass: 'peer-checked/2:bg-brown-500 peer-checked/2:border-brown-50',
    },
  ]

  $: endScore = score($cards)
</script>

<div class="flex min-h-20 max-w-[32em] gap-1 text-3xl font-bold">
  {#each options as { id, value, label, peer, labelClass }}
    <input
      {id}
      {value}
      type="radio"
      name="player"
      class={`${peer} hidden`}
      bind:group={selectedPlayer}
    />
    <label
      for={id}
      class={`${labelClass} relative flex w-full cursor-pointer items-center justify-center rounded-lg border-2 border-brown-400 bg-brown-600 py-4 font-bold`}
    >
      <span class="text-light-brown-200">{endScore[id].score}</span>
      <span class="bottom font-italic absolute left-0 top-0 pl-2 pt-1 text-sm text-brown-50">
        Player {value}
      </span>
    </label>
  {/each}
  <Reset {reset} />
</div>
