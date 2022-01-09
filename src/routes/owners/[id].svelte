<script context="module">
    export async function load({page}){
        const id = page.params.id;
        const url = `https://opensheet.vercel.app/1b8yX7nWWkK4Pjui2i8Y9jcX4zzCmL3O9AWKs1dvObtg/${id}`;
        const res = await fetch(url);
        const owner = await res.json();
        return {props: {owner}};
    }
</script>

<script>
    export let owner;
    let name = owner[0].teamName;
    console.log(name)
</script>

<h1>{owner[0].firstName} {owner[0].lastName}</h1>