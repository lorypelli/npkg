<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	interface Props {
		query: string;
		page: number;
		isCurrent?: boolean;
	}
	const { query, page, isCurrent = false }: Props = $props();
</script>

<a href="/search?q={query}&page={page}" class="pb-2">
	<button
		class={twMerge(
			'cursor-pointer rounded-md border-2 border-black px-1 text-xl dark:border-white',
			isCurrent && 'bg-gray-300 dark:bg-gray-800'
		)}>{page}</button
	>
</a>
