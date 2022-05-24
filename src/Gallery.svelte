<script lang="ts">
	import Gallery from 'svelte-image-gallery'
	import axios from 'axios'
	import { ENDPOINT } from './ENDPOINT'
	export let token: string;


	const imgs = axios.get(`${ENDPOINT}/list/imgs/${token}`).then(res => console.log(res.data) as any || res.data.filter(e=>e != ".keep"));

</script>

{#await imgs}
    loading...
{:then res} 
    
	<Gallery gap="10" maxColumnWidth="200">
		{#each res as img}
			<img src="{ENDPOINT}/imgs/{img}" alt="a"/>
		{/each}
	</Gallery>
{/await}
