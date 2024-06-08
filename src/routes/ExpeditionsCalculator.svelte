<script lang="ts">
  import Expedition from './Expedition.svelte'

  export let player: number = 0
</script>

<div class="flex gap-2">
  <Expedition {player} name="Mountains" color="white" />
  <Expedition {player} name="Volcano" color="red" />
  <Expedition {player} name="Desert" color="yellow" />
  <Expedition {player} name="Jungle" color="green" />
  <Expedition {player} name="Sea" color="blue" />
  <Expedition {player} name="Meteor" color="purple" />
</div>
