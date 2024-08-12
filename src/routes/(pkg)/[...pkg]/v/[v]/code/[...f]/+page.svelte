<script lang="ts">
    import File from '$lib/components/File.svelte';

    export let data;
</script>

<svelte:head>
    <title>{data.fname} - {data.pkg}@{data.version}</title>
</svelte:head>

<File
    file={data.file}
    fname={data.fname}
    pkg={data.pkg}
    pkg_file={data.pkg_file}
    version={data.version}
/>
