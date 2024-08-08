<script lang="ts">
    import Code from '$lib/components/Code.svelte';
    export let data;
</script>

<svelte:head>
    <title>{data.pkg}@{data.version} code</title>
</svelte:head>

<Code code={data.code} pkg={data.pkg} version={data.version} />
