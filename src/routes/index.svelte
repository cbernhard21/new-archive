<script>
    import { owners } from '../stores/getOwnersStore.js';
    import CurrentOwnerCard from '../components/currentOwnerCard.svelte';
    import PastOwnerCard from '../components/pastOwnerCard.svelte';

    let searchTerm = '';
    let filteredOwners = [];

    $: {
        if(searchTerm) {
            filteredOwners = $owners.filter(owner => owner.teamName.toLowerCase().includes(searchTerm.toLowerCase()));
        }else {
            filteredOwners = [... $owners];
        }
    }

</script>

<svelte:head>
    <title>EJFFL Archive</title>
</svelte:head>

<input type="text" bind:value={searchTerm} placeholder="Search Teams">

<div class="container">
    <h2>Current Teams</h2>
    {#each filteredOwners as owner}
    {#if owner.isCurrent === 'yes'}
        <CurrentOwnerCard owner={owner} />
    {/if}        
    {/each}
</div>

<div class="container">
    <h2>Past Teams</h2>
    {#each filteredOwners as owner}
    {#if owner.isCurrent === 'no'}
        <PastOwnerCard owner={owner} />
    {/if}        
    {/each}
</div>

<style>
    .container {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 2rem;
    }

    h2 {
        grid-column: 1/-1
    }

    @media screen and (max-width: 800px) {
        .container {
            grid-template-columns: 1fr;
        }
    }

    input {
        width: 100%;
        padding: 1rem;
        border: 1px solid #777;
        border-radius: 7px;
        margin: .5rem 0;
    }
</style>