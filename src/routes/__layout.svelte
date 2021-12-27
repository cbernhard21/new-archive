<script>
    import '../styles/styles.css'
    import Nav from '../components/nav.svelte';
    import Header from '../components/header.svelte';
    import Footer from '../components/footer.svelte';
    import Aside from '../components/aside.svelte';

    let headerText = "The EJFFL Archieve";

</script>

<div class="page-grid">
    <div class="header">
        <Header headerText={headerText}/>
    </div>

    <div class="aside">
        <Aside/>
    </div>
    
    <div class="nav">
        <Nav/>
    </div>
    
    <main class="main">
        <slot></slot>
    </main>
    
    <div class="footer">
        <Footer/>
    </div>
</div>


<style>

    .page-grid {
        height: calc(100vh - 1px);
        display: grid;
        grid-template-columns: minmax(10px, 1fr) minmax(10px, 3fr);
        grid-template-rows: min-content min-content 1fr min-content;
        grid-gap: 1px;
        grid-template-areas:
            "header header"
            "aside nav"
            "aside main"
            "footer footer";
    }

    .header{
        /* background-color: #FFCDD2; */
        grid-area: header;
}

    .aside{
        /* background-color: #E1BEE7; */
        grid-area: aside;
    }

    .nav{
        /* background-color: #BBDEFB; */
        grid-area: nav;
    }

    .main{
        background-color: var(--dark-white);
        grid-area: main;
        padding: 1rem;
    }

    .footer{
        /* background-color: #FFECB3; */
        grid-area: footer;
    }


</style>
