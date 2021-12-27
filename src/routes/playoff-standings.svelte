<script>
    import { owners } from '../stores/getOwnersStore';
</script>

<svelte:head>
    <title>Regular Season Standings</title>
</svelte:head>

<h1>Regular Season Standings</h1>

<h2>Current Owners</h2>
<div class="grid-table">
    <div class="row">
        <span class="table-heading">Team</span>
        <span class="table-heading">Wins</span>
        <span class="table-heading">Loses</span>
        <span class="table-heading">Win %</span>
    </div>
    {#each $owners as owner}
        {#if owner.isCurrent === 'yes'}
            <div class="row">
                <span>{owner.teamName}</span>
                <span>{owner.playoffWins}</span>
                <span>{owner.playoffLoses}</span> 
                <span>{owner.playoffWinPercentage}</span> 
            </div>
        {/if}
    {/each}
</div>

<h2>Past Owners</h2>
<div class="grid-table">
    <div class="row">
        <span class="table-heading">Team</span>
        <span class="table-heading">Wins</span>
        <span class="table-heading">Loses</span>
        <span class="table-heading">Win %</span>
    </div>
    {#each $owners as owner}
        {#if owner.isCurrent === 'no'}
            <div class="row">
                <span>{owner.teamName}</span>
                <span>{owner.playoffWins}</span>
                <span>{owner.playoffLoses}</span> 
                <span>{owner.playoffWinPercentage}</span> 
            </div>
        {/if}
    {/each}
</div>