<script lang="ts">
    import Version from '../../../../components/Version.svelte';
    export let data;
</script>

<svelte:head>
    <title>npkg - {data.pkg} versions</title>
</svelte:head>

<Version pkg={data.pkg} tags={data.tags} time={data.time} />
