<script lang="ts">
  import Gallery from "svelte-image-gallery";
  import { cdn_endpoint, images } from "./stores";
</script>

<Gallery gap="5" maxColumnWidth="200">
  {#each $images as id}
    <img src="{$cdn_endpoint}/imgs/{id}?scale=0.5" alt={id} />
  {/each}
</Gallery>

<style>
  img {
    background-color: var(--accent-color);
    border-radius: 5px;
  }
</style>
