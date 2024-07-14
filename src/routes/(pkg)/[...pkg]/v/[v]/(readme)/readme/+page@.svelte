<script lang="ts">
    import '../readme.css';
    export let data;
</script>

<svelte:head>
    <title>Readme</title>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.10.0/build/styles/github-dark.min.css"
    />
    <base target="_blank" />
</svelte:head>

{@html data.readme}
