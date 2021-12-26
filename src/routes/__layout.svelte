<script>
    import Nav from '../components/nav.svelte';
    import '../styles/styles.css'
</script>

<main>
    <Nav/>
    <slot></slot>
</main>



<style>

    main {
        max-width: 75%;
        margin: 0 auto;
    }
</style>
