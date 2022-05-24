<script lang="ts">
  import { mode, token, fetch_images, endpoint } from "./stores";

  import Droplet from "./Droplet.svelte";
  import Gallery from "./Gallery.svelte";
  import List from "./List.svelte";

  if ($token != "") {
    fetch_images($endpoint, $token);
  }

  if ($mode === "dark") {
    window.document.body.classList.toggle("dark-mode");
  }
  function toggle() {
    if ($mode === "light") {
      mode.set("dark");
    } else {
      mode.set("light");
    }
    window.document.body.classList.toggle("dark-mode");
  }
</script>

<main>
  <i
    class={`toggle fas ${$mode === "dark" ? "fa-sun" : "fa-moon"}`}
    on:click={toggle}
  />
  <nav>
    <!-- <input id="rim" disabled placeholder="rim" size="3" /> -->
    <i class="fa-solid fa-camera-retro" />

    <span id="token">
      <input bind:value={$token} type="password" placeholder="token..." />
      <button
        on:click={() => {
          fetch_images($endpoint, $token);
        }}>Apply</button
      >
    </span>
  </nav>

  <div class="main">
    <div class="left">
      <Droplet />
      <List />
    </div>
    <div class="right">
      <Gallery />
    </div>
  </div>

  <!-- <div class="center">
    <div>
      <br />
      <div>
        <Droplet {token} />
      </div>
      <div style="height: 200px; width: 100%">
        <Gallery {token} />
      </div>
    </div>
  </div> -->
</main>

<style>
  .toggle {
    position: absolute;
    right: 1rem;
    top: 1rem;
    transition: 200ms;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .toggle:hover {
    color: var(--text-color-hover);
  }
  .toggle:active {
    color: var(--text-color-active);
  }
  :global(body.dark-mode) {
    --bg-color: var(--offblack);
    --text-color: var(--textwhite);
    --text-color-secondary: var(--textsecondaryblack);
    --text-color-disabled: var(--textblackdisabled);
    --text-color-active: var(--textblackactive);
    --text-color-hover: var(--textblackhover);
    --accent-color: var(--accentblack);
    --accent-color-disabled: var(--accentblackdisabled);
    --accent-color-active: var(--accentblackactive);
    --accent-color-hover: var(--accentblackhover);
    --accent-color-shadow: var(--accentblackshadow);
    --accent-color-trans: var(--accentblacktrans);
    --special-color: var(--blackspecialcolor);
    --special-color-hover: var(--blackspecialcolorhover);
    --special-color-active: var(--blackspecialcoloractive);
    --special-color-disabled: var(--blackspecialcolordisabled);
    --special-color-lip: var(--blackspecialcolorlip);
  }

  nav {
    padding: 0.9rem 0.5rem 0rem 0.5rem;
    user-select: none;
    display: flex;
  }

  .main {
    display: flex;
    margin: 0.5rem 1rem;
    /* width: 100%; */
  }

  .left {
    width: 25rem;
    margin-right: 1rem;
  }

  .right {
    width: 100%;
  }
  /* #rim {
    margin-right: 1rem;
    font-weight: 900;
  } */

  .fa-camera-retro {
    font-size: 1.8rem;
    margin-right: 0.8rem;
    padding: 0.1rem;
    margin-left: 0.4rem;
    /* padding-top: 0.7rem; */
    /* margin-top: 0.5rem; */
  }

  #token {
    color: #494949;
    font-weight: 700;
  }

  #token button,
  input {
    font-weight: 700;
  }

  /* div {
    text-align: center;
  }
  input,
  button {
    margin: 10px;
    font-size: larger;
  }
  .center {
    height: 100%;
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
  } */
</style>
