<script lang="ts">
    import { twMerge } from 'tailwind-merge';
    export let query: string;
    export let page: number;
    export let isCurrent = false;
</script>

<a href="/search?q={query}&page={page}#s" class="pb-2">
    <button
        class={twMerge(
            'rounded-md border-2 border-black px-1 text-xl dark:border-white',
            isCurrent && 'bg-gray-300 dark:bg-gray-700',
        )}>{page}</button
    >
</a>
