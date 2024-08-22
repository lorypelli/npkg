<script lang="ts">
    import { draggable } from '@neodrag/svelte';
    import type { Entries } from '../../../types/package.ts';
    export let dependencies: Entries;
    export let devDependencies: Entries;
</script>

<svelte:window
    on:keydown={(e) => {
        if (e.shiftKey && e.key == 'D') {
            e.preventDefault();
            location.href = '#deps';
        }
        if (location.hash.slice(1) == 'deps' && e.key == 'Escape') {
            e.preventDefault();
            location.href = '#pkg';
        }
    }}
/>
<div
    id="deps"
    class="fixed inset-0 hidden items-center justify-center bg-black/60 target:flex"
>
    <div
        class="relative cursor-move rounded-xl border-2 border-black bg-primary p-3 pt-9 shadow-lg shadow-black dark:border-white dark:bg-primary_dark"
        use:draggable={{ bounds: 'parent', gpuAcceleration: false }}
    >
        <div
            class="grid max-h-container grid-cols-2 overflow-hidden text-center"
        >
            {#if dependencies}
                <div class="flex max-h-container flex-col">
                    <span class="text-lg font-bold">Dependencies:</span>
                    <div class="flex flex-col overflow-auto">
                        {#each Object.entries(dependencies) as [k]}
                            <span class="font-extrabold">{k}</span>
                        {/each}
                    </div>
                </div>
            {/if}
            {#if devDependencies}
                <div class="flex max-h-container flex-col">
                    <span class="text-lg font-bold">Dev Dependencies</span>
                    <div class="flex flex-col overflow-auto">
                        {#each Object.entries(devDependencies) as [k]}
                            <span class="font-extrabold">{k}</span>
                        {/each}
                    </div>
                </div>
            {/if}
        </div>
        <a
            href="#pkg"
            class="absolute right-2 top-2 rounded-full border-2 border-black p-1 text-sm font-extrabold dark:border-white"
            >Close</a
        >
    </div>
</div>
