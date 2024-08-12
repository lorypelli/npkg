<script lang="ts">
    import File from '$lib/components/File.svelte';

    export let data;
</script>

<svelte:head>
    <title>file of {data.pkg}@{data.version}</title>
</svelte:head>

<File
    file={data.file}
    pkg={data.pkg}
    pkg_file={data.pkg_file}
    version={data.version}
/>
