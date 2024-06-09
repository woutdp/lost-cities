<script lang="ts">
  import { cards } from '$lib/store'
  import { score } from '$lib/scoring'

  $: endScore = score($cards)
</script>

<div>
  {endScore.player1.score}
  {endScore.player2.score}
</div>
