<script lang="ts">
    import File from '$lib/components/File.svelte';
    import hljs from 'highlight.js';
    import { onMount } from 'svelte';
    export let data;
    onMount(() => hljs.highlightAll());
</script>

<svelte:head>
    <title
        >npkg: fast and efficient - {data.fname}, {data.pkg}@{data.version}</title
    >
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@latest/build/styles/github-dark.min.css"
    />
</svelte:head>

<File
    file={data.file}
    fname={data.fname}
    pkg={data.pkg}
    pkg_file={data.pkg_file}
    version={data.version}
/>
