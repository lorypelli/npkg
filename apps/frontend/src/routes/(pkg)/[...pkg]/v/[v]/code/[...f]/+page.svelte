<script lang="ts">
    import File from '$lib/components/File.svelte';
    import Highlight from '$lib/components/Highlight.svelte';
    import hljs from 'highlight.js';
    const { data } = $props();
    const pkg = $derived(`${data.pkg}@${data.version}`);
    const { value } = $derived(
        hljs.highlight(data.pkg_file, { language: data.language }),
    );
</script>

<svelte:head>
    <title>npkg: fast and efficient - {data.fname}, {pkg}</title>
    <meta
        name="og:title"
        content="npkg: fast and efficient - {data.fname}, {pkg}"
    />
    <Highlight />
</svelte:head>

<File
    file={data.file}
    fname={data.fname}
    pkg={data.pkg}
    pkg_file={value}
    lang={data.language}
    version={data.version}
/>
