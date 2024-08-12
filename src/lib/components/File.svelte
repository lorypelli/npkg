<script lang="ts">
    export let file: string;
    export let pkg: string;
    export let pkg_file: string;
    export let version: string;
</script>

<span class="text-center text-xl">File of {pkg}@{version}</span>
<span class="text-md text-center font-bold">{file}</span>
<div class="px-4 text-justify">
    {pkg_file}
</div>
