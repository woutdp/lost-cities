<script lang="ts">
  import Card from './Card.svelte'

  export let color: string
  export let name: string

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
</script>

<h2 class={`text-${color} text-2xl`}>{name}</h2>
<div class="flex items-center gap-2">
  <Card {color} type="handshake" />
  <Card {color} type="handshake" />
  <Card {color} type="handshake" />
  <Card {color} type="number" value={2} />
  <Card {color} type="number" value={3} />
  <Card {color} type="number" value={4} />
  <Card {color} type="number" value={5} />
  <Card {color} type="number" value={6} />
  <Card {color} type="number" value={7} />
  <Card {color} type="number" value={8} />
  <Card {color} type="number" value={9} />
  <Card {color} type="number" value={10} />
</div>
