<script lang="ts">
  import Gallery from "svelte-image-gallery";
  import { cdn_endpoint, images, modal } from "./stores";
</script>

<Gallery gap="5" maxColumnWidth="200" on:click={(e) => modal.set(e.detail.alt)}>
  {#each $images as id}
    <img src="{$cdn_endpoint}/imgs/{id}?scale=0.5" alt={id} />
  {/each}
</Gallery>

<style>
  img {
    background-color: var(--accent-color);
    border-radius: 5px;
    cursor: pointer;
    transition: all 100ms;
    user-select: none;
  }

  img:hover {
    opacity: 0.8;
  }

  img:active {
    opacity: 1;
  }
</style>
