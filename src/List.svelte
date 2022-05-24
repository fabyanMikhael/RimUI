<script lang="ts">
  import { cdn_endpoint, images } from "./stores";
</script>

<ul>
  {#each $images as id}
    <li><i class="fa-solid fa-image" /> {id}</li>
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
  }

  .fa-image {
    margin-right: 0.7rem;
  }
</style>
