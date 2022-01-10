<nav>
    <ul class="nav-list">
        <li><a href="/">Home</a></li>
        <li><a href="/regular-standings">Regular Season Standings</a></li>
        <li><a href="/playoff-standings">Playoff Standings</a></li>
        <li><a href="/champions">Champions</a></li>
        <li><a href="/trades">Trades</a></li>
    </ul>
</nav>

<style>

    nav {
        background-color: var(--light-grey);
        padding: 1rem;
        height: 100%;
    }

    nav a {
        color: var(--black);
        font-weight: 400;
        display: inline-block;
        width: 100%;
        height: 100%;
        padding: 1rem;
        padding-right: 1.5rem;
    }

    .nav-list {
        list-style: none;
        display: flex;
        gap: 2px;
        flex-direction: column;
        justify-content: start;
    }

    li {
        border: 1px solid var(--grey);
        cursor: pointer;
        transition: all .2s ease-in;
    }

    li:hover {
        background-color: var(--white);
    }
    
</style>

