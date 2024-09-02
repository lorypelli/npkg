<script lang="ts">
    import { draggable } from '@neodrag/svelte';
    import type { Entries } from '../../../types/package.ts';
    export let scripts: Entries = {};
    const s = Object.entries(scripts);
</script>

<svelte:window
    on:keydown={(e) => {
        if (e.shiftKey && e.key == 'S') {
            e.preventDefault();
            location.href = '#scripts';
        }
        if (location.hash.slice(1) == 'scripts' && e.key == 'Escape') {
            e.preventDefault();
            location.href = '#pkg';
        }
    }}
/>
<div
    id="scripts"
    class="fixed inset-0 hidden items-center justify-center bg-black/60 target:flex"
>
    <div
        class="relative cursor-move rounded-xl border-2 border-black bg-primary p-3 pt-9 shadow-lg shadow-black dark:border-white dark:bg-primary_dark"
        use:draggable={{ bounds: 'parent', gpuAcceleration: false }}
    >
        {#if s.length == 0}
            <span class="font-extrabold">No Scripts Found!</span>
        {:else}
            {#each s as [k, v]}
                <div class="text-center">
                    <span class="font-bold">{k}</span>
                    <pre class="flex items-center justify-center">
                        <code class="hljs language-sh rounded-lg">{v}</code>
                    </pre>
                </div>
            {/each}
        {/if}
        <a
            href="#pkg"
            class="absolute right-2 top-2 rounded-full border-2 border-black p-1 text-sm font-extrabold dark:border-white"
            >Close</a
        >
    </div>
</div>
