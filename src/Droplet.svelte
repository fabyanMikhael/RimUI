<style global>
    @import 'filepond/dist/filepond.css';
    @import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
    </style>
    
    <script lang="ts">
    export let token: string;
    import FilePond, { registerPlugin, supported } from 'svelte-filepond';
    
    // Import the Image EXIF Orientation and Image Preview plugins
    // Note: These need to be installed separately
    // `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
    import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
    import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
    
    // Register the plugins
    registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
    
    // a reference to the component, used to call FilePond methods
    let pond;
    
    // pond.getFiles() will return the active files
    
    // the name to use for the internal file input
    let name = 'filepond';
    $:{
        console.log(name);
        
    }
    // handle filepond events
    function handleInit() {
        console.log('FilePond has initialised');
    }
    
    function handleAddFile(err, fileItem) {
        console.log('A file has been added', fileItem.filename);
        name = fileItem.filename;
    }
    //    server="https://rim.ncp.nathanferns.xyz/upload/imgs/{name}/{token}"
    </script>
    
    <div class="app">
    
        <FilePond bind:this={pond} {name}
            server="http://localhost/imgs/{name}/{token}"
            allowMultiple={true}
            oninit={handleInit}
            onaddfile={handleAddFile}/>
    
    </div>