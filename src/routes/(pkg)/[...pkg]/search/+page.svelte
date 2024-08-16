<script lang="ts">
    import NotFound from '$lib/components/NotFound.svelte';
    import Pages from '$lib/components/Pages.svelte';
    import SearchResult from '$lib/components/SearchResult.svelte';
    export let data;
</script>

<svelte:head>
    <title>npkg - results for "{data.q}"</title>
</svelte:head>

{#each data.packages as p}
    <SearchResult
        date={p.date}
        description={p.description}
        keywords={p.keywords}
        name={p.name}
        publisher={p.publisher}
        version={p.version}
    />
{:else}
    <NotFound />
{/each}
{#if data.packages.length > 0}
    <Pages
        currentPage={data.currentPage}
        lastPage={data.lastPage}
        pages={data.pages}
        query={data.q}
    />
{/if}
