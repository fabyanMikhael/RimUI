<script lang="ts">
  import { modal, cdn_endpoint } from "./stores";
  import { fade } from "svelte/transition";

  document.addEventListener(
    "click",
    () => {
      if ($modal) {
        modal.set(null);
      }
    },
    true
  );
</script>

{#if $modal}
  <div in:fade={{ duration: 100 }} class="modal">
    <img src="{$cdn_endpoint}/imgs/{$modal}" alt={$modal} />
    <div id="caption">{$modal}</div>
  </div>
{/if}

<style>
  .modal {
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: #000000; /* Fallback color */
    background-color: #000000e6; /* Black w/ opacity */
  }

  .modal img {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    user-select: none;
    border-radius: 5px;
  }

  #caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
    height: 150px;
  }
</style>
