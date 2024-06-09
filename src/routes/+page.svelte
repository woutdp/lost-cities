<script lang="ts">
  import type { PageData } from './$types'
  import ExpeditionsCalculator from './ExpeditionsCalculator.svelte'
  import Scoring from './Scoring.svelte'
  import { cards } from '$lib/store'

  export let data: PageData
  cards.update(() => data.cardState)

  let player1 = $cards.player1
  let player2 = $cards.player2

  $: cards.set({ player1, player2 })
</script>

<svelte:head>
  <title>Lost Cities Calculator</title>
  <meta name="description" content="A scoring calculator for the game lost cities" />
</svelte:head>

<div class="container mx-auto">
  <h1 class="text-4xl font-bold pb-4 pt-4">Lost Cities Calculator</h1>
  <!-- {JSON.stringify(selectedCardsPlayer1)} test -->
  <ExpeditionsCalculator player={1} bind:selectedCards={player1} />
  <!-- <ExpeditionsCalculator player={2} bind:selectedCards={player2} /> -->
  <!-- <ExpeditionsCalculator player={2} /> -->
  <Scoring />
</div>
