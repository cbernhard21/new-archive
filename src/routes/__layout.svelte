<script>
    import '../styles/styles.css'
    import Nav from '../components/nav.svelte';
    import Header from '../components/header.svelte';
    import Footer from '../components/footer.svelte';


    let headerText = "The EJFFL Archieve";

</script>

<div class="page-grid">
    <div class="header">
        <Header headerText={headerText}/>
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
        grid-template-columns: minmax(10px, max-content) minmax(10px, 3fr);
        grid-template-rows: min-content 1fr min-content;
        grid-gap: 1px;
        grid-template-areas:
            "header header"
            "nav main"
            "nav main"
            "footer footer";
    }

    .header{
        /* background-color: #FFCDD2; */
        grid-area: header;
    }

    .nav{
        background-color: var(--light-grey);
        grid-area: nav;
        display: flex;
        justify-content: end;
    }

    .main{
        background-color: var(--dark-white);
        grid-area: main;
        padding: 1rem;
        padding-right: 2rem;
    }

    .footer{
        /* background-color: #FFECB3; */
        grid-area: footer;
    }


</style>
