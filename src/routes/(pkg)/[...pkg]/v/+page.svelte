<script lang="ts">
    export let data;
</script>

<svelte:head>
    <title>npkg - {data.pkg} versions</title>
</svelte:head>

{#each data.versions as v}
    <div></div>
{/each}