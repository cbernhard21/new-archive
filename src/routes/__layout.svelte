<script>
    import Nav from '../components/nav.svelte'
</script>

<Nav/>

<slot></slot>


<style>
    :global(*) {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
</style>
