<script>
    export let data;
    import Textbox from "$lib/component/textbox.svelte"
</script>

<h1>Welcome to my structure</h1>
 
<Textbox/>
<h1>{JSON.stringify(data)}</h1>