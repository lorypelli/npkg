<script lang="ts">
	import NotFound from '$lib/components/NotFound.svelte';
	import Pages from '$lib/components/Pages.svelte';
	import SearchResult from '$lib/components/SearchResult.svelte';
	const { data } = $props();
</script>

<svelte:head>
	<title>npkg: fast and efficient - results for '{data.q}'</title>
	<meta name="og:title" content="npkg: fast and efficient - results for '{data.q}'" />
</svelte:head>

<div class="flex flex-col gap-y-1">
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
</div>
{#if data.packages && data.packages.length > 0}
	<Pages currentPage={data.currentPage} lastPage={data.lastPage} query={data.q} />
{/if}
