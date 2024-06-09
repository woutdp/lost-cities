<script lang="ts">
  import Expedition from './Expedition.svelte'

  export let player: number = 0
  export let selectedCards = []

  let w = []
  let r = []
  let y = []
  let g = []
  let b = []
  let p = []

  $: selectedCards = [...w, ...r, ...y, ...g, ...b, ...p]
</script>

<div class="flex gap-1 sm:gap-2 justify-between h-dvh">
  <Expedition {player} bind:selectedCards={w} name="Mountains" color="white" />
  <Expedition {player} bind:selectedCards={r} name="Volcano" color="red" />
  <Expedition {player} bind:selectedCards={y} name="Desert" color="yellow" />
  <Expedition {player} bind:selectedCards={g} name="Jungle" color="green" />
  <Expedition {player} bind:selectedCards={b} name="Sea" color="blue" />
  <!-- <Expedition {player} bind:selectedCards={p} name="Meteor" color="purple" /> -->
</div>
