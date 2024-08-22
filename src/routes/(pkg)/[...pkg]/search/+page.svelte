<script lang="ts">
    import NotFound from '$lib/components/NotFound.svelte';
    import Pages from '$lib/components/Pages.svelte';
    import SearchResult from '$lib/components/SearchResult.svelte';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    export let data;
    onMount(() => {
        const unsubscribe = page.subscribe(($p) => {
            if (
                !$p.url.hash ||
                ($p.url.hash.slice(1) != 's' &&
                    $p.url.hash.slice(1) != 'p_select')
            ) {
                location.href = '#s';
            }
        });
        return () => unsubscribe();
    });
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
        query={data.q}
    />
{/if}
