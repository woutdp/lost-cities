<script lang="ts">
  import Card from './Card.svelte'

  export let color: string
  export let name: string
  export let player: number

  // let colorMap = {
  //   yellow: { bg: 'bg-yellow', text: 'text-yellow' },
  //   green: { bg: 'bg-green', text: 'text-green' },
  //   blue: { bg: 'bg-blue', text: 'text-blue' },
  //   red: { bg: 'bg-red', text: 'text-red' },
  //   purple: { bg: 'bg-purple', text: 'text-purple' },
  //   white: { bg: 'bg-white', text: 'text-white' },
  // }

  // $: background = colorMap[color].bg
  // $: text = colorMap[color].text
  // handshake1 =

  let score = 0
</script>

<!-- <h2 class={`text-${color} pt-2`}>{name}</h2> -->
<div class="flex flex-col items-center gap-2 relative">
  <Card {player} {color} value={0} id="1" />
  <Card {player} {color} value={0} id="2" />
  <Card {player} {color} value={0} id="3" />
  <Card {player} {color} value={2} />
  <Card {player} {color} value={3} />
  <Card {player} {color} value={4} />
  <Card {player} {color} value={5} />
  <Card {player} {color} value={6} />
  <Card {player} {color} value={7} />
  <Card {player} {color} value={8} />
  <Card {player} {color} value={9} />
  <Card {player} {color} value={10} />
  <p class="text-xl">{score}</p>
</div>
