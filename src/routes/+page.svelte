<script>
  import ExpeditionsCalculator from './ExpeditionsCalculator.svelte'
  import welcome from '$lib/images/svelte-welcome.webp'
  import welcome_fallback from '$lib/images/svelte-welcome.png'
</script>

<svelte:head>
  <title>Lost Cities Calculator</title>
  <meta name="description" content="A scoring calculator for the game lost cities" />
</svelte:head>

<div class="container mx-auto">
  <h1 class="text-4xl font-bold pb-4 pt-4">Lost Cities Calculator</h1>
  <ExpeditionsCalculator />
</div>
