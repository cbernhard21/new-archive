<script>
    export let owner;
</script>

<a  class="card" href={`/owners/${owner.firstName}`}>
    <h2>{owner.teamName}</h2>
    <p>{owner.firstName} {owner.lastName}</p>
</a>

<style>
    a {
        text-decoration: none;
        display: inline-block;
    }

    .card {
        padding: 1.5rem;
        color: var(--white);
        background-color: rgb(70, 1, 1);
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>