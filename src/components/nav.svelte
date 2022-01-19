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
        background-color: var(--black);
        
        padding: 1rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* border: 2px solid green; */
    }

    nav a {
        color: var(--white);
        font-size: 2rem;
        font-weight: 400;
        display: inline-block;
        width: 100%;
        height: 100%;
        padding: 1rem;
        padding-right: 1.5rem;
        text-align: right;
    }

    .nav-list {
        list-style: none;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* border: 2px solid red; */
        gap: 2rem;
    }

    li {
        border-bottom: 1px solid #3a3a3a;
        cursor: pointer;
        transition: all .2s ease-in;
    }

    li:hover {
        border-bottom: 1px solid #bbb;
    }
    
</style>

