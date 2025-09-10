<script lang="ts">
    import Back from './Back.svelte';
    import Forward from './Forward.svelte';
    interface Props {
        currentPage: number;
        lastPage: number;
        query: string;
        type: 'previous' | 'next';
    }
    const { currentPage, lastPage, query, type }: Props = $props();
    const num = $derived(type == 'previous' ? -1 : 1);
    const newPage = $derived(currentPage + num);
    const isLastPage = $derived(currentPage == lastPage);
    const isFirstPage = $derived(currentPage == 1);
</script>

<a
    href="/search?q={query}&page={isLastPage && type == 'next'
        ? 1
        : isFirstPage && type == 'previous'
          ? lastPage
          : newPage}"
    class="flex justify-center pb-2"
>
    {#if type == 'previous'}
        <button
            class="cursor-pointer rounded-md border-2 border-black px-1 text-xl dark:border-white"
        >
            <Back />
        </button>
    {:else if type == 'next'}
        <button
            class="cursor-pointer rounded-md border-2 border-black px-1 text-xl dark:border-white"
        >
            <Forward />
        </button>
    {/if}
</a>
