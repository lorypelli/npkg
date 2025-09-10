<script lang="ts">
    import Code from '$lib/components/Code.svelte';
    const { data } = $props();
    const pkg = $derived(`${data.pkg}@${data.version}`);
</script>

<svelte:head>
    <title>npkg: fast and efficient - {pkg} code</title>
    <meta name="og:title" content="npkg: fast and efficient - {pkg} code" />
</svelte:head>

<Code code={data.code} pkg={data.pkg} version={data.version} />
