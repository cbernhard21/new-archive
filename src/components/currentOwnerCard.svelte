<script>
    export let owner;
</script>

<a  class="card" href={`/owners/${owner.teamName}`}>
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
        background-color: var(--white);
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        box-shadow: 3px 3px 5px var(--light-grey);
        transition: all 0.2s ease-in;
    }

    .card:hover {
        background-color: #ddd;
    }

    h2 {
        text-align: center;
    }
</style>