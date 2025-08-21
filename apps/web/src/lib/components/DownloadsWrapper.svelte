<script lang="ts">
	import type { ValidRange } from '@npkg/types';
	import Downloads from '$lib/components/Downloads.svelte';
	const ranges: ValidRange[] = ['d', 'w', 'm', 'y'];
	interface Props {
		range?: string;
		downloads?: number;
	}
	const { range, downloads = -1 }: Props = $props();
</script>

<div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
	{#each ranges as r}
		{#if r == range}
			<Downloads range={r} num={downloads} />
		{:else}
			<Downloads range={r} />
		{/if}
	{/each}
</div>
