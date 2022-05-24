<script lang="ts">
  import { images, modal } from "./stores";
</script>

<ul>
  {#each $images as id}
    <li on:click={() => modal.set(id)}><i class="fa-solid fa-image" /> {id}</li>
  {/each}
</ul>

<style>
  ul {
    margin: 0;
    margin-top: 2rem;
    padding: 0;
  }

  li {
    background-color: var(--accent-color);
    color: var(--text-color);
    list-style-type: none;
    margin: 3px 0;
    height: 1.8rem;
    border-radius: 5px;
    padding: 0.1rem 0.5rem;
    text-align: left;
    align-items: center;
    display: flex;
    cursor: pointer;
    transition: all 100ms;
  }

  li:hover {
    background-color: var(--accent-color-hover);
    transform: scale(1.05);
  }

  li:active {
    background-color: var(--accent-color-active);
    transform: scale(0.98);
  }

  .fa-image {
    margin-right: 0.7rem;
  }
</style>
