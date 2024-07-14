<script lang="ts">
    import type { Entries } from '../../types/package';
    export let tags: Entries;
    export let pkg: string;
    export let versions: Entries;
    export let time: Entries;
</script>

<div class="px-4">
    <div class="grid grid-cols-4 gap-2">
        {#each Object.entries(tags).reverse() as [k, v]}
            <a href="/{pkg}/v/{k}">
                <div
                    class="h-full rounded-xl border-2 border-black bg-primary p-2 text-center text-primary_dark dark:border-white dark:bg-primary_dark dark:text-primary"
                >
                    <span class="font-extrabold">{k}</span>
                    <span>{v}</span>
                </div>
            </a>
        {/each}
    </div>
    <br />
    <div class="grid grid-cols-4 gap-2">
        {#each Object.entries(versions).reverse() as [k]}
            <a href="/{pkg}/v/{k}">
                <div
                    class="h-full rounded-xl border-2 border-black bg-primary p-2 text-center text-primary_dark dark:border-white dark:bg-primary_dark dark:text-primary"
                >
                    <span class="font-extrabold">{k}</span>
                    <span>{new Date(time[k]).toLocaleDateString()}</span>
                </div>
            </a>
        {/each}
    </div>
</div>
