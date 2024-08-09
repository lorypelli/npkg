<script lang="ts">
    import type { Entries } from '../../../types/package';
    export let dependencies: Entries;
    export let devDependencies: Entries;
</script>

<div
    id="deps"
    class="absolute inset-0 hidden items-center justify-center target:flex bg-black/60"
>
    <div
        class="relative rounded-xl border-2 border-black bg-primary p-3 pt-9 shadow-lg shadow-black dark:border-white dark:bg-primary_dark"
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
            class="absolute right-2 top-2 rounded-full border-2 border-black dark:border-white p-1 text-sm font-extrabold"
            >Close</a
        >
    </div>
</div>
