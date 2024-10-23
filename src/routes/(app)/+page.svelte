<script lang="ts">
    import Search from '$lib/components/Search.svelte';
    import Downloads from '$lib/components/Downloads.svelte';
    import type { ValidRange } from '../../../types/downloads.ts';
    const ranges: ValidRange[] = ['d', 'w', 'm', 'y'];
    let { data } = $props();
</script>

<div class="flex h-screen flex-col items-center justify-center">
    <span class="text-8xl font-extrabold">NPKG</span>
    <Search />
    <span class="text-lg font-bold"
        >View the source code on: <a
            href="https://github.com/lorypelli/npkg"
            target="_blank"
            class="hover:underline">Github</a
        ></span
    >
    <div class="flex flex-col">
        {#each ranges as r}
            {#if r == data.range}
                <Downloads range={r} num={data.downloads} />
            {:else}
                <Downloads range={r} />
            {/if}
        {/each}
    </div>
</div>
