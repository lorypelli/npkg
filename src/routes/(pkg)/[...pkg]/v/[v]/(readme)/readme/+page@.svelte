<script lang="ts">
    import '$lib/styles/readme.css';
    import '$lib/styles/scrollbar.css';
    let { data } = $props();
</script>

<svelte:head>
    <title>npkg: fast and efficient - Readme</title>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@latest/build/styles/github-dark.min.css"
    />
    <base target="_blank" />
</svelte:head>

{@html data.pkg_readme}
