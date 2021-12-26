<script>
    import Nav from '../components/nav.svelte'
</script>



<main>
    <Nav/>
    <slot></slot>
</main>



<style>
    :global(*) {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    main {
        max-width: 75%;
        margin: 0 auto;
    }
</style>
