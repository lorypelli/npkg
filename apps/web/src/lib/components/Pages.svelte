<script lang="ts">
	import Arrow from './Arrow.svelte';
	import PageNumber from './PageNumber.svelte';
	import PageSelector from './PageSelector.svelte';
	interface Props {
		currentPage: number;
		lastPage: number;
		query: string;
	}
	const { currentPage, lastPage, query }: Props = $props();
	const pages = 2;
	const pageRemains = $derived(lastPage - currentPage);
</script>

<div class="flex flex-wrap justify-center gap-x-1 pt-0.5">
	<Arrow {currentPage} {lastPage} {query} type="previous" />
	{#if currentPage - 1 > pages}
		<PageNumber {query} page={1} />
		{#if currentPage - 2 > pages}
			<PageSelector {lastPage} {query} />
		{/if}
	{/if}
	{#if currentPage != 1}
		<div class="flex flex-row-reverse flex-wrap justify-center gap-x-1">
			{#each { length: pages } as _, i}
				{@const page = currentPage - i - 1}
				{#if page > 0}
					<PageNumber {query} {page} />
				{/if}
			{/each}
		</div>
	{/if}
	<PageNumber {query} page={currentPage} isCurrent />
	{#if currentPage != lastPage}
		<div class="flex flex-wrap justify-center gap-x-1">
			{#each { length: pages } as _, i}
				{@const page = currentPage + i + 1}
				{#if page <= lastPage}
					<PageNumber {query} {page} />
				{/if}
			{/each}
		</div>
	{/if}
	{#if pageRemains > pages}
		{#if pageRemains - 1 > pages}
			<PageSelector {lastPage} {query} />
		{/if}
		<PageNumber {query} page={lastPage} />
	{/if}
	<Arrow {currentPage} {lastPage} {query} type="next" />
</div>
