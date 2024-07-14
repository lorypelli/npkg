<script lang="ts">
    export let data;
</script>

<svelte:head>
    <title>npkg - {data.pkg} versions</title>
</svelte:head>

{#each Object.entries(data.versions) as [k, v]}
    <div></div>
{/each}