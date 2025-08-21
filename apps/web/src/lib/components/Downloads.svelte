<script lang="ts">
	import type { ValidRange } from '@npkg/types';
	interface Props {
		range: ValidRange;
		num?: number;
	}
	const { range, num = -1 }: Props = $props();
</script>

<div class="flex flex-col items-center">
	{#if range == 'd'}
		<span>Downloads for last day:</span>
	{:else if range == 'w'}
		<span>Downloads for last week:</span>
	{:else if range == 'm'}
		<span>Downloads for last month:</span>
	{:else if range == 'y'}
		<span>Downloads for last year:</span>
	{/if}
	{#if num > -1}
		<span>{num.toLocaleString()}</span>
	{:else}
		<a href="?range={range}">
			<button
				class="bg-primary dark:bg-primary_dark cursor-pointer rounded-xl border-2 border-black p-3 active:bg-gray-300 dark:border-white dark:active:bg-gray-800"
				>Show Downloads!</button
			>
		</a>
	{/if}
</div>
