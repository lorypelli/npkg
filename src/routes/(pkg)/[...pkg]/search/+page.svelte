<script lang="ts">
    import NotFound from '$lib/components/NotFound.svelte';
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
    <div class="space-x-2 p-1 text-center">
        {#each data.pages as p}
            <a href="/search?q={data.q}&page={p}">
                <button
                    class="mb-2 rounded-md border-2 border-black px-1 text-xl dark:border-white"
                    >{p}</button
                >
            </a>
        {/each}
        {#if data.pages.at(-1) && (data.pages.at(-1) || 0) + 1 != data.lastPage}
            <span>...</span>
        {/if}
        <a href="/search?q={data.q}&page={data.lastPage}">
            <button
                class="mb-2 rounded-md border-2 border-black px-1 text-xl dark:border-white"
                >{data.lastPage}</button
            >
        </a>
    </div>
{/if}
