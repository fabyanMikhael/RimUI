<script lang="ts">
import Droplet from "./Droplet.svelte";
import Gallery from "./Gallery.svelte";

  let token: string = localStorage.getItem("UPLOAD_TOKEN") || "";
  $: {
    localStorage.setItem("UPLOAD_TOKEN", token);
  }

</script>

<div class="center">
    <div>
      <h2>Token: <input bind:value={token} type="password" placeholder="TOKEN"></h2>
      <br>
      <div>
        <Droplet {token}/>
      </div>
      <div style="height: 200px; width: 100%">
        <Gallery {token}/>
      </div>
    </div>

</div>

<style>
  div{
    text-align: center;
  }
  input, button{
    margin: 10px;
    font-size: larger;
  }
  .center{
    height: 100%;
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
</style>