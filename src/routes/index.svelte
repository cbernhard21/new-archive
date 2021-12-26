<script>
    import { owners } from '../stores/getOwnersStore.js';
</script>

<svelte:head>
    <title>EJFFL Archive</title>
</svelte:head>


<h1>Ernie J's Fantasy Football League</h1>

{#each $owners as owner}
<p>{owner.teamName}</p>
{/each}