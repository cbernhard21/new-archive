<script>
    import { owners } from '../stores/getOwnersStore';
    import StandingsTable from '../components/standingsTable.svelte'
</script>

<svelte:head>
    <title>Regular Season Standings</title>
</svelte:head>

<h1>Playoff Standings</h1>

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
            <StandingsTable 
                teamName={owner.teamName} 
                playoffWins={owner.playoffWins}
                playoffLoses={owner.playoffLoses}
                playoffWinPercentage={owner.playoffWinPercentage}
            />
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
            <StandingsTable 
                teamName={owner.teamName} 
                playoffWins={owner.playoffWins}
                playoffLoses={owner.playoffLoses}
                playoffWinPercentage={owner.playoffWinPercentage}
            />
        {/if}
    {/each}
</div>