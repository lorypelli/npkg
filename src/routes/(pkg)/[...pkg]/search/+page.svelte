<script lang="ts">
    import NotFound from '../../../../components/NotFound.svelte';
    import SearchResult from '../../../../components/SearchResult.svelte';
    export let data;
</script>

<svelte:head>
    <title>npkg - results for "{data.q}"</title>
</svelte:head>

{#each data.objects as o}
    <SearchResult
        date={o.package.date}
        description={o.package.description}
        keywords={o.package.keywords}
        name={o.package.name}
        publisher={o.package.publisher}
        version={o.package.version}
    />
{:else}
    <NotFound />
{/each}
{#if data.total > 0}
    <div class="flex justify-center space-x-2">
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
