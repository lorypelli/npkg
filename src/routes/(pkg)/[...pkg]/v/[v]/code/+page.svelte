<script lang="ts">
    import Code from '$lib/components/Code.svelte';
    let { data } = $props();
</script>

<svelte:head>
    <title>npkg: fast and efficient - {data.pkg}@{data.version} code</title>
</svelte:head>

<Code code={data.code} pkg={data.pkg} version={data.version} />
