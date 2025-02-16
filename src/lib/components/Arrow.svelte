<script lang="ts">
    import Back from './Back.svelte';
    import Forward from './Forward.svelte';
    interface Props {
        currentPage: number;
        query: string;
        type: 'previous' | 'next';
    }
    let { currentPage, query, type }: Props = $props();
    const num = type == 'previous' ? -1 : 1;
</script>

<a
    href="/search?q={query}&page={currentPage + num}#s"
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
