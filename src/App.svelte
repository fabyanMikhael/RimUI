<script lang="ts">
import Droplet from "./Droplet.svelte";

  let token: string = localStorage.getItem("UPLOAD_TOKEN") || "";
  $: {
    localStorage.setItem("UPLOAD_TOKEN", token);
  }

</script>

<div class="center">
    <div>
      <input bind:value={token} type="password" placeholder="TOKEN">
      <br>
      <Droplet {token}/>
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