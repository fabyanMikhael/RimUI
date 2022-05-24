<script lang="ts">
  import { token, endpoint, fetch_images } from "./stores";

  import FilePond, { registerPlugin, supported } from "svelte-filepond";

  // Import the Image EXIF Orientation and Image Preview plugins
  // Note: These need to be installed separately
  // `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
  import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
  import FilePondPluginImagePreview from "filepond-plugin-image-preview";

  // Register the plugins
  registerPlugin(
    FilePondPluginImageExifOrientation,
    FilePondPluginImagePreview
  );

  // a reference to the component, used to call FilePond methods
  let pond;

  // pond.getFiles() will return the active files

  // the name to use for the internal file input
  let name = "filepond";
  $: {
    console.log(name);
  }
  // handle filepond events
  function handleInit() {
    console.log("FilePond has initialised");
  }

  function handleAddFile(err, fileItem) {
    console.log("A file has been added", fileItem.filename);
    name = fileItem.filename;
  }

  function refetch() {
    fetch_images($endpoint, $token);
  }
  //    server="https://rim.ncp.nathanferns.xyz/upload/imgs/{name}/{token}"
</script>

<FilePond
  bind:this={pond}
  {name}
  server="{$endpoint}/imgs/{name}/{$token}"
  oninit={handleInit}
  onaddfile={handleAddFile}
  instantUpload={false}
  onprocessfiles={refetch}
  onprocessfilerevert={refetch}
/>

<style global>
  @import "filepond/dist/filepond.css";
  @import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

  .filepond--drop-label {
    color: var(--text-color);
  }

  .filepond--panel-root {
    background-color: var(--accent-color);
  }
</style>
