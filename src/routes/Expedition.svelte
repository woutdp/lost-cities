<script lang="ts">
  import Card from './Card.svelte'

  export let color: string
  export let name: string
  export let player: number
  export let selectedCards

  let hs1, hs2, hs3, c2, c3, c4, c5, c6, c7, c8, c9, c10
  $: selectedCards = [hs1, hs2, hs3, c2, c3, c4, c5, c6, c7, c8, c9, c10].filter(Boolean)

  let score = 0
</script>

<!-- <h2 class={`text-${color} pt-2`}>{name}</h2> -->
<div class="flex flex-col items-center gap-1 sm:gap-2 relative flex-grow">
  <Card {player} {color} bind:result={hs1} value={0} id="1" />
  <Card {player} {color} bind:result={hs2} value={0} id="2" />
  <Card {player} {color} bind:result={hs3} value={0} id="3" />
  <Card {player} {color} bind:result={c2} value={2} />
  <Card {player} {color} bind:result={c3} value={3} />
  <Card {player} {color} bind:result={c4} value={4} />
  <Card {player} {color} bind:result={c5} value={5} />
  <Card {player} {color} bind:result={c6} value={6} />
  <Card {player} {color} bind:result={c7} value={7} />
  <Card {player} {color} bind:result={c8} value={8} />
  <Card {player} {color} bind:result={c9} value={9} />
  <Card {player} {color} bind:result={c10} value={10} />
</div>
