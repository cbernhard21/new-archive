<script>
    import { owners } from '../stores/getOwnersStore.js';
    import OwnerCard from '../components/ownerCard.svelte';

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


<h1>Ernie J's Fantasy Football League</h1>

<input type="text" bind:value={searchTerm} placeholder="Search Teams">

<div class="container">
    {#each filteredOwners as owner}
        <OwnerCard owner={owner} />
    {/each}
</div>



<style>
    .container {
        display: grid;
        gap: 1rem;
        grid-template-columns: 1fr 1fr;
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