<script lang="ts">
    import Back from './Back.svelte';
    import Forward from './Forward.svelte';
    interface Props {
        currentPage: number;
        lastPage: number;
        query: string;
        type: 'previous' | 'next';
    }
    let { currentPage, lastPage, query, type }: Props = $props();
    const num = type == 'previous' ? -1 : 1;
    const newPage = currentPage + num;
</script>

<a
    href="/search?q={query}&page={currentPage == lastPage && type == 'next'
        ? 1
        : currentPage == 1 && type == 'previous'
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
