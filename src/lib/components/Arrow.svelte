<script lang="ts">
    import Back from './Back.svelte';
    import Forward from './Forward.svelte';
    export let currentPage: number;
    export let query: string;
    export let type: 'previous' | 'next';
    const num = type == 'previous' ? -1 : 1;
</script>

<a
    href="/search?q={query}&page={currentPage + num}#s"
    class="flex justify-center pb-2"
>
    {#if type == 'previous'}
        <button
            class="rounded-md border-2 border-black px-1 text-xl dark:border-white"
        >
            <Back />
        </button>
    {:else if type == 'next'}
        <button
            class="rounded-md border-2 border-black px-1 text-xl dark:border-white"
        >
            <Forward />
        </button>
    {/if}
</a>
