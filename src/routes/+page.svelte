<script context="module">
  import { writable } from 'svelte/store'
  export const uncheck = writable(false)
</script>

<script lang="ts">
  import type { PageData } from './$types'
  import ExpeditionsCalculator from './ExpeditionsCalculator.svelte'
  import Scoring from './Scoring.svelte'
  import { cards } from '$lib/store'
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  export let data: PageData
  cards.update(() => data.cardState)

  let selectedPlayer = 1
  let player1 = $cards.player1
  let player2 = $cards.player2

  $: cards.set({ player1, player2 })

  function reset() {
    $uncheck = true
    player1 = []
    player2 = []
    // Little bit of a hack but I don't mind it
    setTimeout(() => {
      $uncheck = false
    }, 1000)
  }
</script>

<svelte:head>
  <title>Lost Cities Calculator</title>
  <meta name="description" content="A scoring calculator for the game Lost Cities" />
</svelte:head>

<div class="container mx-auto flex h-dvh flex-col gap-1 p-1">
  <Scoring bind:selectedPlayer {reset} />
  {#if selectedPlayer === 1}
    <ExpeditionsCalculator player="player1" bind:selectedCards={player1} />
  {:else}
    <ExpeditionsCalculator player="player2" bind:selectedCards={player2} />
  {/if}
</div>
